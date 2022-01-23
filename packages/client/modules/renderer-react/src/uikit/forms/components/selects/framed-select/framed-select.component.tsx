import * as C from './framed-select.styles';
import { FormField } from '../../base';
import { FramedSelectOption } from './partials';
import { Scrollable } from '@/uikit/common/components';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useSelectBehavior } from '../use-select-behavior';
import { useTransition } from 'react-spring';
import type { FC } from 'react';
import type { SelectOption } from '../select.types';
import { useController } from 'react-hook-form';
import clickAudioFile from '../assets/sounds/sfx-uikit-dropdown-click.ogg';
import { useAudio } from '@/uikit/core/hooks';
import type { ControlledInput } from '../../../types';

export interface FramedSelectProps extends ControlledInput<string> {
  items: SelectOption[];
  label: string;
  openUpward?: boolean;
}

export const FramedSelect: FC<FramedSelectProps> = ({
  items,
  id,
  label,
  name,
  isDisabled,
  control,
  defaultValue,
  onChange,
  className,
  openUpward,
}) => {
  const {
    labelId,
    selectedOption,
    optionsContainerRef,
    customSelectRef,
    isOpen,
    setSelectedOption,
    setIsOpen,
    handleKeyDown,
    handleKeyUp,
  } = useSelectBehavior(items, name, id, defaultValue);

  const controller = useController({ name, control, defaultValue });

  const transition = useTransition(isOpen, {
    config: springConfigHarsh,
    from: { transform: 'scaleY(0)', opacity: 0 },
    enter: { opacity: 1, transform: 'scaleY(1)' },
    leave: { opacity: 0, transform: 'scaleY(0)' },
  });

  const clickAudio = useAudio(clickAudioFile, 'sfx');

  return (
    <FormField className={className}>
      <C.SelectLabel
        id={labelId}
        htmlFor={id}
        isInvalid={false}
        disabled={isDisabled}
        onClick={() => document.getElementById(id)?.focus()}
      >
        {label}
      </C.SelectLabel>
      <C.Select
        tabIndex={isDisabled ? -1 : 0}
        active={isOpen}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={controller.field.onBlur}
        role="combobox"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-autocomplete="none"
        aria-labelledby={labelId}
        data-disabled={isDisabled}
        id={id}
        ref={customSelectRef}
      >
        {transition(
          (style, show) =>
            show && (
              <C.AnimatedOptionsContainer
                openUpward={!!openUpward}
                ref={optionsContainerRef}
                style={style}
              >
                <Scrollable>
                  <C.Options role="listbox">
                    {items.map(
                      (option, index) =>
                        option && (
                          <FramedSelectOption
                            index={index}
                            disabled={option.disabled}
                            key={option.label + option.value}
                            selected={selectedOption === option.value}
                            onClick={() => {
                              setSelectedOption(option.value);
                              setIsOpen(false);
                              controller.field.onChange(option.value);
                              onChange?.(option.value);
                            }}
                          >
                            {option.label}
                          </FramedSelectOption>
                        ),
                    )}
                  </C.Options>
                </Scrollable>
              </C.AnimatedOptionsContainer>
            ),
        )}

        <C.CurrentContainer
          onClick={() => {
            setIsOpen(!isOpen);
            clickAudio.active.onClick();
          }}
        >
          <C.CurrentValue>
            {items.find((item) => item.value === selectedOption)?.label ||
              'Select'}
          </C.CurrentValue>
        </C.CurrentContainer>
      </C.Select>
    </FormField>
  );
};
