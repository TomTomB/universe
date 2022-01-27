import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export interface TransformAnimationOptions {
  duration?: number;
  easing?: (t: number) => number;
  scale?: {
    x?: number;
    y?: number;
  };
  translate?: {
    x?: number;
    y?: number;
    unit?: 'px' | '%' | 'rem';
  };
  maskSize?: {
    x?: number;
    y?: number;
    unit?: 'px' | '%' | 'rem';
  };
}

export const transform = (
  node: HTMLElement,
  { duration, easing, scale, translate, maskSize }: TransformAnimationOptions,
): TransitionConfig => {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;

  const scaleValueX = scale?.x;
  const scaleValueY = scale?.y;

  const translateX = translate?.x;
  const translateY = translate?.y;
  const translateUnit = translate?.unit ?? 'px';

  const maskSizeX = maskSize?.x;
  const maskSizeY = maskSize?.y;
  const maskSizeUnit = maskSize?.unit ?? 'px';

  const shouldTranslateX = translateX !== undefined;
  const shouldTranslateY = translateY !== undefined;

  const shouldScaleX = scaleValueX !== undefined && scaleValueX !== 1;
  const shouldScaleY = scaleValueY !== undefined && scaleValueY !== 1;

  const shouldMaskSizeX = maskSizeX !== undefined && maskSizeX !== 100;
  const shouldMaskSizeY = maskSizeY !== undefined && maskSizeY !== 100;

  const sdx = scaleValueX && 1 - scaleValueX;
  const sdy = scaleValueY && 1 - scaleValueY;

  const makeCss = (
    translateX: number | undefined,
    translateY: number | undefined,
    scaleX: number | undefined,
    scaleY: number | undefined,
    maskSizeX: number | undefined,
    maskSizeY: number | undefined,
  ) => {
    const cssArray: string[] = [];

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

    if (transformCssValue) {
      cssArray.push(`transform: ${transformCssValue};`);
    }

    const maskSizeCss =
      maskSizeX !== undefined || maskSizeY !== undefined
        ? `${shouldMaskSizeX ? maskSizeX : 100}${maskSizeUnit} ${
            shouldMaskSizeY ? maskSizeY : 100
          }${maskSizeUnit};`
        : '';

    if (maskSizeCss) {
      cssArray.push(`-webkit-mask-size: ${maskSizeCss}`);
    }

    return cssArray.join('; ');
  };

  return {
    duration: duration ?? 300,
    easing: easing ?? cubicOut,
    css: (t, u) => {
      return makeCss(
        translateX && (1 - t) * translateX,
        translateY && (1 - t) * translateY,
        sdx && 1 - sdx * u,
        sdy && 1 - sdy * u,
        maskSizeX && maskSizeX * t + maskSizeX,
        maskSizeY && maskSizeY * t + maskSizeY,
      );
    },
  };
};
