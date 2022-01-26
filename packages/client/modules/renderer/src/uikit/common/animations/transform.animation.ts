import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export const transform = (
  node: HTMLElement,
  {
    duration,
    easing,
    scale,
    translate,
  }: {
    duration?: number;
    easing?: (t: number) => number;
    scale?: {
      from?: [number, number];
      to?: [number, number];
    };
    translate?: {
      from?: [number, number];
      to?: [number, number];
      unit?: 'px' | '%' | 'rem';
    };
  },
): TransitionConfig => {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;

  const scaleValueX = scale?.from?.[0] ?? scale?.to?.[0];
  const scaleValueY = scale?.from?.[1] ?? scale?.to?.[1];

  const translateX = translate?.from?.[0] ?? translate?.to?.[0];
  const translateY = translate?.from?.[1] ?? translate?.to?.[1];
  const translateUnit = translate?.unit ?? 'px';

  const shouldTranslateX = translateX !== undefined;
  const shouldTranslateY = translateY !== undefined;
  const shouldScaleX = scaleValueX !== undefined && scaleValueX !== 1;
  const shouldScaleY = scaleValueY !== undefined && scaleValueY !== 1;

  const sdx = scaleValueX && 1 - scaleValueX;
  const sdy = scaleValueY && 1 - scaleValueY;

  const makeCss = (
    translateX: number | undefined,
    translateY: number | undefined,
    scaleX: number | undefined,
    scaleY: number | undefined,
  ) => {
    const translateXCss = shouldTranslateX
      ? `translateX(${translateX}${translateUnit})`
      : '';
    const translateYCss = shouldTranslateY
      ? `translateY(${translateY}${translateUnit})`
      : '';
    const scaleXCss = shouldScaleX ? `scaleX(${scaleX})` : '';
    const scaleYCss = shouldScaleY ? `scaleY(${scaleY})` : '';

    const transformCssValue = [
      transform,
      translateXCss,
      translateYCss,
      scaleXCss,
      scaleYCss,
    ]
      .filter(Boolean)
      .join(' ');

    return `transform: ${transformCssValue};`;
  };

  return {
    duration: duration ?? 300,
    easing: easing ?? cubicOut,
    css: (t, u) =>
      makeCss(
        translateX && (1 - t) * translateX,
        translateY && (1 - t) * translateY,
        sdx && 1 - sdx * u,
        sdy && 1 - sdy * u,
      ),
  };
};
