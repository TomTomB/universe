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
      from?: number;
      to?: number;
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

  const scaleValue = scale?.from ?? scale?.to;

  const translateX = translate?.from?.[0] ?? translate?.to?.[0];
  const translateY = translate?.from?.[1] ?? translate?.to?.[1];
  const translateUnit = translate?.unit ?? 'px';

  const shouldTranslateX = translateX !== undefined;
  const shouldTranslateY = translateY !== undefined;
  const shouldScale = scaleValue !== undefined;

  const sd = scaleValue && 1 - scaleValue;

  const makeCss = (
    translateX: number | undefined,
    translateY: number | undefined,
    scale: number | undefined,
  ) => {
    const translateXCss = shouldTranslateX
      ? `translateX(${translateX}${translateUnit})`
      : '';
    const translateYCss = shouldTranslateY
      ? `translateY(${translateY}${translateUnit})`
      : '';
    const scaleCss = shouldScale ? `scale(${scale})` : '';

    const transformCssValue = [
      transform,
      translateXCss,
      translateYCss,
      scaleCss,
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
        sd && 1 - sd * u,
      ),
  };
};
