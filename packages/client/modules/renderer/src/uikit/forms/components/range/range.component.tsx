import * as C from './range.styles';
import { useBoundingRect } from '@/uikit/core/hooks';
import { useState, type FC } from 'react';
import type { Direction } from '@/types';
import type { UseFormRegister } from 'react-hook-form';

export interface RangeProps {
  id: string;
  name: string;
  direction?: Direction;
  className?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  onChange?: (value: number) => void;
}

export const Range: FC<RangeProps> = ({
  className,
  id,
  name,
  disabled,
  direction = 'horizontal',
  min = 0,
  max = 100,
  step = 1,
  value: defaultValue = 0,
  register,
  onChange,
}) => {
  const [baseBoundingRect, baseRef] = useBoundingRect<HTMLDivElement>();
  const [value, setValue] = useState(
    defaultValue > max ? max : defaultValue < min ? min : defaultValue,
  );

  const reg = register?.(name);

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
    if (disabled || e.button !== 0 || !baseBoundingRect) {
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
    if (disabled) {
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
    onChange?.(newValue);

    reg?.onChange({ target: {}, type: 'change' });

    const slider = document.getElementById(id + '_native') as HTMLInputElement;
    slider.value = newValue.toString();
  };

  const styleValue = (100 / max) * value;
  const styleScale = styleValue / 100;

  return (
    <>
      <C.NativeSlider
        id={id + '_native'}
        type="range"
        disabled={disabled}
        name={name}
        min={min}
        max={max}
        // value={value}
        onChange={(e) => updateValue(+e.target.value)}
        {...reg}
      />
      <C.StyledSlider
        aria-orientation={direction}
        role="slider"
        data-disabled={disabled}
        aria-disabled={disabled}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        aria-valuetext={value.toString()}
        className={className}
        tabIndex={disabled ? -1 : 0}
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
      >
        <C.SliderBase ref={baseRef}>
          <C.ThumbRail>
            <C.Thumb />
          </C.ThumbRail>
          <C.Fill />
        </C.SliderBase>
      </C.StyledSlider>
    </>
  );
};
