import * as C from './range.styles';
import { useBoundingRect } from '@/uikit/core/hooks';
import { useMemo, useRef, type FC } from 'react';
import type { Direction } from '@/types';
import { useController } from 'react-hook-form';
import type { ControlledInput } from '../../types';

export interface RangeProps extends ControlledInput<number> {
  direction?: Direction;
  min?: number;
  max?: number;
  step?: number;
}

export const Range: FC<RangeProps> = ({
  id,
  name,
  control,
  defaultValue = 0,
  className,
  isDisabled,
  direction = 'horizontal',
  min = 0,
  max = 100,
  step = 1,
  onChange,
}) => {
  const controller = useController({ name, control, defaultValue });

  const [baseBoundingRect, baseRef] = useBoundingRect<HTMLDivElement>();
  const value = useRef(
    defaultValue > max ? max : defaultValue < min ? min : defaultValue,
  );
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const stepInverse = useMemo(() => 1 / step, [step]);
  const styleValue = useRef((100 / max) * value.current);
  const styleScale = useRef(styleValue.current / 100);

  let cacheVal = value.current;

  const mouseMoveListener = (e: MouseEvent) => {
    if (!baseBoundingRect) {
      return;
    }

    const offsetPercentage = getOffsetPercentage(e, baseBoundingRect);
    updateValueFromPercent(offsetPercentage);
  };

  const mouseUpListener = () => {
    document.removeEventListener('mousemove', mouseMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
  };

  const handleSliderMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (isDisabled || e.button !== 0 || !baseBoundingRect) {
      return;
    }

    const offsetPercentage = getOffsetPercentage(
      e.nativeEvent,
      baseBoundingRect,
    );
    updateValueFromPercent(offsetPercentage);

    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isDisabled) {
      return;
    }

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        updateValue(value.current - step);
        break;

      case 'ArrowRight':
      case 'ArrowUp':
        updateValue(value.current + step);
        break;

      case 'PageUp':
        updateValue(value.current + max / 10);
        break;

      case 'PageDown':
        updateValue(value.current - max / 10);
        break;

      case 'Home':
        updateValue(min);
        break;

      case 'End':
        updateValue(max);
        break;
    }
  };

  const getOffsetPercentage = (event: MouseEvent, rect: DOMRect) => {
    const offset =
      direction === 'horizontal'
        ? event.clientX - rect.left
        : event.clientY - rect.top;

    const rectLength = direction === 'horizontal' ? rect.width : rect.height;

    const offsetPercentageExact = (100 / rectLength) * offset;

    const offsetPercentage =
      Math.round(offsetPercentageExact * stepInverse) / stepInverse;

    if (offsetPercentage > 100) {
      return 100;
    } else if (offset < 0) {
      return 0;
    } else {
      return offsetPercentage;
    }
  };

  const updateValueFromPercent = (percent: number) => {
    const valueFromPercent =
      direction === 'horizontal'
        ? (max / 100) * percent
        : max - (max / 100) * percent;

    updateValue(valueFromPercent);
  };

  const updateValue = (newValue: number) => {
    if (newValue < min) {
      newValue = min;
    } else if (newValue > max) {
      newValue = max;
    }

    if (newValue === value.current || newValue === cacheVal) {
      return;
    }

    value.current = newValue;
    cacheVal = newValue;

    styleValue.current = (100 / max) * newValue;
    styleScale.current = styleValue.current / 100;

    controller.field.onChange(newValue);
    onChange?.(newValue);
  };

  return (
    <C.StyledSlider
      aria-orientation={direction}
      role="slider"
      data-disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value.current}
      aria-valuetext={value.current.toString()}
      className={className}
      tabIndex={isDisabled ? -1 : 0}
      id={id}
      ref={sliderRef}
      style={
        {
          '--slider-value-scale': styleScale.current,
          '--thumb-translate': `${
            direction === 'horizontal'
              ? styleValue.current
              : -styleValue.current
          }%`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }
      onKeyDown={handleKeyDown}
      onMouseDown={handleSliderMouseDown}
      onBlur={controller.field.onBlur}
    >
      <C.SliderBase ref={baseRef}>
        <C.ThumbRail>
          <C.Thumb />
        </C.ThumbRail>
        <C.Fill />
      </C.SliderBase>
    </C.StyledSlider>
  );
};
