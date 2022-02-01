<script lang="ts">
  import { dir } from '@/store/util';
  import { resizeObserver } from '@/uikit/common/actions';
  import { Tooltip } from '@/uikit/overlay/components';

  export let isVertical = false;
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let value: number;
  export let isDisabled = false;
  export let isInverted = false;
  export let isTooltipEnabled = false;
  export let tooltipValueSuffix = '';
  export let ariaLabeledBy: string;

  export const recalculateDimensions = () => {
    const newRect = _slider?.getBoundingClientRect();

    if (!newRect) {
      return;
    }

    sliderDimensions = newRect;
  };

  const clamp = (_value: number, _min: number, _max: number) => {
    return Math.max(_min, Math.min(_value, _max));
  };

  const calculatePercentage = (_value: number | null) => {
    return ((_value || 0) - min) / (max - min);
  };

  let _slider: HTMLDivElement | null = null;
  let _thumb: HTMLDivElement | null = null;
  let _value = clamp(value, min, max);
  let _percent = calculatePercentage(_value);
  let _isSliding: 'keyboard' | 'pointer' | null = null;
  let _touchId: number | null = null;
  let _lastPointerEvent: MouseEvent | TouchEvent | null = null;
  let sliderDimensions: DOMRect | null = null;

  $: roundToDecimal = getDecimalCount(step);
  $: valueText = getValueText(_value);
  $: percent = clamp(_percent, min, max);
  $: shouldInvertAxis = isVertical ? !isInverted : isInverted;
  $: shouldInvertMouseCoords =
    $dir === 'rtl' && !isVertical ? !shouldInvertAxis : shouldInvertAxis;

  $: trackBackgroundStyles = getTrackBackgroundStyles(
    percent,
    shouldInvertMouseCoords,
    isVertical,
  );
  $: trackFillStyles = getTrackFillStyles(
    percent,
    shouldInvertMouseCoords,
    isVertical,
  );
  $: thumbContainerStyles = getThumbContainerStyles(
    percent,
    shouldInvertAxis,
    isVertical,
    $dir,
  );

  const getDecimalCount = (_step: number) => {
    if (_step % 1 !== 0) {
      return _step.toString().split('.').pop()?.length ?? null;
    }
    return null;
  };

  const getValueText = (_value: number) => {
    if (roundToDecimal && _value && _value % 1 !== 0) {
      return _value.toFixed(roundToDecimal);
    }

    return (_value ?? 0).toString();
  };

  const setValue = (v: number) => {
    if (v === _value) return;

    if (roundToDecimal && v !== min && v !== max) {
      v = parseFloat(v.toFixed(roundToDecimal));
    }

    _value = v;
    value = v;
    _percent = calculatePercentage(_value);
  };

  const getThumbGap = () => {
    return 0;
  };

  const getTrackBackgroundStyles = (
    _percentage: number,
    _shouldInvertMouseCoords: boolean,
    _isVertical: boolean,
  ) => {
    const axis = _isVertical ? 'Y' : 'X';
    const scale = _isVertical
      ? `1, ${1 - _percentage}, 1`
      : `${1 - _percentage}, 1, 1`;
    const sign = _shouldInvertMouseCoords ? '-' : '';

    return {
      transform: `translate${axis}(${sign}${getThumbGap()}px) scale3d(${scale})`,
    };
  };

  const getTrackFillStyles = (
    _percentage: number,
    _shouldInvertMouseCoords: boolean,
    _isVertical: boolean,
  ) => {
    const axis = _isVertical ? 'Y' : 'X';
    const scale = _isVertical ? `1, ${_percentage}, 1` : `${_percentage}, 1, 1`;
    const sign = _shouldInvertMouseCoords ? '' : '-';

    return {
      transform: `translate${axis}(${sign}${getThumbGap()}px) scale3d(${scale})`,
      display: _percentage === 0 ? 'none' : '',
    };
  };

  const getThumbContainerStyles = (
    _percentage: number,
    _shouldInvertAxis: boolean,
    _isVertical: boolean,
    _dir: string,
  ) => {
    let axis = _isVertical ? 'Y' : 'X';
    let invertOffset =
      _dir == 'rtl' && !_isVertical ? !_shouldInvertAxis : _shouldInvertAxis;
    let offset = (invertOffset ? _percentage : 1 - _percentage) * 100;

    return {
      transform: `translate${axis}(-${offset}%)`,
    };
  };

  const isTouchEvent = (
    event: MouseEvent | TouchEvent,
  ): event is TouchEvent => {
    return event.type[0] === 't';
  };

  const getTouchIdForSlider = (event: TouchEvent, slider: HTMLDivElement) => {
    for (let i = 0; i < event.touches.length; i++) {
      const target = event.touches[i].target as HTMLElement;

      if (slider === target || slider.contains(target)) {
        return event.touches[i].identifier;
      }
    }

    return null;
  };

  const findMatchingTouch = (touches: TouchList, id: number) => {
    for (let i = 0; i < touches.length; i++) {
      if (touches[i].identifier === id) {
        return touches[i];
      }
    }

    return null;
  };

  const getPointerPositionOnPage = (
    event: MouseEvent | TouchEvent,
    id: number | null,
  ) => {
    let point: { clientX: number; clientY: number } | null;

    if (isTouchEvent(event)) {
      if (typeof id === 'number') {
        point =
          findMatchingTouch(event.touches, id) ||
          findMatchingTouch(event.changedTouches, id);
      } else {
        point = event.touches[0] || event.changedTouches[0];
      }
    } else {
      point = event;
    }

    return point ? { x: point.clientX, y: point.clientY } : null;
  };

  const bindGlobalEvents = (triggerEvent: TouchEvent | MouseEvent) => {
    const isTouch = isTouchEvent(triggerEvent);
    const moveEventName = isTouch ? 'touchmove' : 'mousemove';
    const endEventName = isTouch ? 'touchend' : 'mouseup';

    document.addEventListener(moveEventName, pointerMove, {
      passive: false,
    });
    document.addEventListener(endEventName, pointerUp, {
      passive: false,
    });

    if (isTouch) {
      document.addEventListener('touchcancel', pointerUp, {
        passive: false,
      });
    }

    window.addEventListener('blur', windowBlur);
  };

  const unbindGlobalEvents = () => {
    document.removeEventListener('mousemove', pointerMove);
    document.removeEventListener('mouseup', pointerUp);
    document.removeEventListener('touchmove', pointerMove);
    document.removeEventListener('touchend', pointerUp);
    document.removeEventListener('touchcancel', pointerUp);
    window.removeEventListener('blur', windowBlur);
  };

  const increment = (numSteps: number) => {
    const clampedValue = clamp(_value || 0, min, max);
    setValue(clamp(clampedValue + step * numSteps, min, max));
  };

  const calculateValue = (percentage: number) => {
    return min + percentage * (max - min);
  };

  const updateValueFromPosition = (pos: { x: number; y: number }) => {
    if (!sliderDimensions) {
      return;
    }

    let offset = isVertical ? sliderDimensions.top : sliderDimensions.left;
    let size = isVertical ? sliderDimensions.height : sliderDimensions.width;
    let posComponent = isVertical ? pos.y : pos.x;

    let percent = clamp((posComponent - offset) / size, 0, 1);

    if (shouldInvertMouseCoords) {
      percent = 1 - percent;
    }

    if (percent === 0) {
      setValue(min);
    } else if (percent === 1) {
      setValue(max);
    } else {
      const exactValue = calculateValue(percent);
      const closestValue = Math.round((exactValue - min) / step) * step + min;
      setValue(clamp(closestValue, min, max));
    }
  };

  const onPointerDown = (event: TouchEvent | MouseEvent) => {
    if (
      isDisabled ||
      _isSliding ||
      (!isTouchEvent(event) && event.button !== 0) ||
      !_slider
    ) {
      return;
    }

    _touchId = isTouchEvent(event) ? getTouchIdForSlider(event, _slider) : null;
    const pointerPosition = getPointerPositionOnPage(event, _touchId);

    if (!pointerPosition) return;

    _isSliding = 'pointer';
    _lastPointerEvent = event;
    bindGlobalEvents(event);
    updateValueFromPosition(pointerPosition);
    document.documentElement.style.cursor = 'grabbing';

    if (event.cancelable) {
      event.preventDefault();
    }
  };

  const pointerMove = (event: TouchEvent | MouseEvent) => {
    if (_isSliding === 'pointer') {
      const pointerPosition = getPointerPositionOnPage(event, _touchId);

      if (pointerPosition) {
        event.preventDefault();
        _lastPointerEvent = event;
        updateValueFromPosition(pointerPosition);
      }
    }
  };

  const pointerUp = (event: TouchEvent | MouseEvent) => {
    if (_isSliding === 'pointer') {
      if (
        !isTouchEvent(event) ||
        typeof _touchId !== 'number' ||
        findMatchingTouch(event.changedTouches, _touchId)
      ) {
        event.preventDefault();
        unbindGlobalEvents();
        _isSliding = null;
        _touchId = null;
      }

      document.documentElement.style.cursor = '';
    }
  };

  const windowBlur = () => {
    if (_lastPointerEvent) {
      pointerUp(_lastPointerEvent);
    }
  };

  const onKeydown = (event: KeyboardEvent) => {
    if (
      isDisabled ||
      event.altKey ||
      event.shiftKey ||
      event.ctrlKey ||
      event.metaKey ||
      (_isSliding && _isSliding !== 'keyboard')
    ) {
      return;
    }

    switch (event.key) {
      case 'PageUp':
        increment(10);
        break;
      case 'PageDown':
        increment(-10);
        break;
      case 'End':
        setValue(max);
        break;
      case 'Home':
        setValue(min);
        break;
      case 'ArrowLeft':
        increment($dir === 'rtl' ? 1 : -1);
        break;
      case 'ArrowUp':
        increment(1);
        break;
      case 'ArrowRight':
        increment($dir === 'rtl' ? -1 : 1);
        break;
      case 'ArrowDown':
        increment(-1);
        break;
      default:
        return;
    }

    _isSliding = 'keyboard';
    event.preventDefault();
  };

  const onKeyup = () => {
    if (_isSliding === 'keyboard') {
      _isSliding = null;
    }
  };
</script>

<div
  class="slider"
  role="slider"
  aria-orientation={isVertical ? 'vertical' : 'horizontal'}
  aria-disabled={isDisabled}
  aria-valuemax={max}
  aria-valuemin={min}
  aria-valuenow={_value}
  aria-valuetext={valueText}
  aria-labelledby={ariaLabeledBy}
  tabindex={isDisabled ? -1 : 0}
  class:slider-is-sliding={_isSliding}
  class:slider-is-inverted={isInverted}
  use:resizeObserver
  bind:this={_slider}
  on:mousedown={onPointerDown}
  on:touchstart|passive={onPointerDown}
  on:selectstart={(e) => e.preventDefault()}
  on:keydown={onKeydown}
  on:keyup={onKeyup}
  on:element-resize={(e) => (sliderDimensions = e.detail)}
>
  <div class="track-container">
    <div
      class="track-background"
      style="transform: {trackBackgroundStyles.transform};"
    />
    <div
      class="track-fill"
      style="transform: {trackFillStyles.transform}; display: {trackFillStyles.display};"
    />
  </div>

  <div
    class="thumb-container"
    style="transform: {thumbContainerStyles.transform};"
  >
    <div class="thumb" bind:this={_thumb} />
  </div>
</div>

{#if isTooltipEnabled && !isDisabled}
  <Tooltip
    type="system"
    placement={isVertical ? 'right' : 'top'}
    attachTo={_thumb}
    forceVisible={!!_isSliding}
    delay={300}
  >
    <p>{valueText}{tooltipValueSuffix}</p>
  </Tooltip>
{/if}

<style lang="scss" global>
  .slider {
    --fill: rgb(var(--color-gold-700)), rgb(var(--color-gold-500));
    --fill-hover: rgb(var(--color-gold-500)) 0%, rgb(var(--color-gold-400)) 56%,
      rgb(var(--color-gold-300)) 100%;

    --fill-to-right: linear-gradient(to right, var(--fill));
    --fill-to-left: linear-gradient(to left, var(--fill));
    --fill-to-top: linear-gradient(to top, var(--fill));
    --fill-to-bottom: linear-gradient(to bottom, var(--fill));

    --fill-to-right-hover: linear-gradient(to right, var(--fill-hover));
    --fill-to-left-hover: linear-gradient(to left, var(--fill-hover));
    --fill-to-top-hover: linear-gradient(to top, var(--fill-hover));
    --fill-to-bottom-hover: linear-gradient(to bottom, var(--fill-hover));

    position: relative;

    &:hover,
    &:focus-visible {
      .thumb {
        background-position: 0 -30px;
      }
    }

    &:active {
      cursor: grabbing;

      .thumb {
        background-position: 0 -60px;
        cursor: grabbing;
      }
    }

    &[aria-disabled='true'] {
      pointer-events: none;

      .track-fill {
        background: rgb(var(--color-grey-700)) !important;
      }

      .thumb {
        background-position: 0 -90px !important;
      }
    }

    &[aria-orientation='horizontal'] {
      height: 30px;
      min-width: 128px;

      .track-container {
        top: calc(50% - 1px);
        left: 0;
        height: 2px;
        width: 100%;
      }

      .track-fill {
        height: 2px;
        width: 100%;
        transform-origin: 0 0;
      }

      .track-background {
        height: 2px;
        width: 100%;
        transform-origin: 100% 100%;
      }

      .thumb-container {
        width: 100%;
        height: 0;
        top: 50%;
      }

      &:hover,
      &:focus-visible {
        .track-fill {
          background: var(--fill-to-right-hover);
        }
      }

      .track-fill,
      &:active .track-fill {
        background: var(--fill-to-right);
      }

      &.slider-is-inverted {
        .track-fill {
          transform-origin: 100% 100%;
        }
        .track-background {
          transform-origin: 0 0;
        }

        &:hover,
        &:focus-visible {
          .track-fill {
            background: var(--fill-to-left-hover);
          }
        }

        .track-fill,
        &:active .track-fill {
          background: var(--fill-to-left);
        }
      }
    }

    &[aria-orientation='vertical'] {
      width: 30px;
      min-height: 128px;

      .track-container {
        top: 0;
        left: calc(50% - 1px);
        height: 100%;
        width: 2px;
      }

      .track-fill {
        width: 2px;
        height: 100%;
        transform-origin: 100% 100%;
      }

      .track-background {
        width: 2px;
        height: 100%;
        transform-origin: 0 0;
      }

      .thumb-container {
        width: 0;
        height: 100%;
        left: 50%;
      }

      &:hover,
      &:focus-visible {
        .track-fill {
          background: var(--fill-to-top-hover);
        }
      }

      .track-fill,
      &:active .track-fill {
        background: var(--fill-to-top);
      }

      &.slider-is-inverted {
        .track-fill {
          transform-origin: 0 0;
        }
        .track-background {
          transform-origin: 100% 100%;
        }

        &:hover,
        &:focus-visible {
          .track-fill {
            background: var(--fill-to-bottom-hover);
          }
        }

        .track-fill,
        &:active .track-fill {
          background: var(--fill-to-bottom);
        }
      }
    }
  }

  [dir='rtl'] {
    .slider {
      &[aria-orientation='horizontal'] {
        .track-fill {
          transform-origin: 100% 100%;
        }
        .track-background {
          transform-origin: 0 0;
        }

        &:hover,
        &:focus-visible {
          .track-fill {
            background: var(--fill-to-left-hover);
          }
        }

        .track-fill,
        &:active .track-fill {
          background: var(--fill-to-left);
        }

        &.slider-is-inverted {
          .track-fill {
            transform-origin: 0 0;
          }
          .track-background {
            transform-origin: 100% 100%;
          }

          &:hover,
          &:focus-visible {
            .track-fill {
              background: var(--fill-to-right-hover);
            }
          }

          .track-fill,
          &:active .track-fill {
            background: var(--fill-to-right);
          }
        }
      }
    }
  }

  .track-container {
    position: absolute;
    overflow: hidden;
  }

  .track-fill {
    position: absolute;
    transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .track-background {
    position: absolute;

    transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    background-color: rgb(var(--color-grey-700));
  }

  .thumb-container {
    position: absolute;
    z-index: 1;
    transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .thumb {
    position: absolute;
    right: -15px;
    bottom: -15px;
    width: 30px;
    height: 30px;
    transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    background: url(./assets/images/slider-btn.png) no-repeat top left;
    background-size: 100%;
    cursor: grab;
  }

  .slider-is-sliding {
    .track-fill,
    .track-background,
    .thumb-container {
      transition-duration: 0ms;
    }
  }
</style>
