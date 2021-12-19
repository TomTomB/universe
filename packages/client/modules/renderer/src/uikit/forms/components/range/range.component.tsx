import * as C from './range.styles';
import { useBoundingRect } from '@/uikit/core/hooks';
import { useState, type FC } from 'react';
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
  const [value, setValue] = useState(
    defaultValue > max ? max : defaultValue < min ? min : defaultValue,
  );

  const stepInverse = 1 / step;

  let cacheVal = value;

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
        updateValue(value - step);
        break;

      case 'ArrowRight':
      case 'ArrowUp':
        updateValue(value + step);
        break;

      case 'PageUp':
        updateValue(value + max / 10);
        break;

      case 'PageDown':
        updateValue(value - max / 10);
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

    if (newValue === value || newValue === cacheVal) {
      return;
    }

    setValue(newValue);
    cacheVal = newValue;

    controller.field.onChange(newValue);
    onChange?.(newValue);
  };

  const styleValue = (100 / max) * value;
  const styleScale = styleValue / 100;

  return (
    <C.StyledSlider
      aria-orientation={direction}
      role="slider"
      data-disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      aria-valuetext={value.toString()}
      className={className}
      tabIndex={isDisabled ? -1 : 0}
      id={id}
      style={
        {
          '--slider-value-scale': styleScale,
          '--thumb-translate': `${
            direction === 'horizontal' ? styleValue : -styleValue
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
