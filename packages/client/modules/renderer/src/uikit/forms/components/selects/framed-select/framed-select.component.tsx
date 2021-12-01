import * as C from './framed-select.styles';
import { FormField } from '../../base';
import { FramedSelectOption } from './partials';
import { NativeSelect } from '../native-select';
import { Scrollable } from '@/uikit/common/components';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useSelectBehavior } from '../use-select-behavior';
import { useTransition } from 'react-spring';
import type { FC } from 'react';
import type { SelectOption } from '../select.types';
import type { UseFormRegister } from 'react-hook-form';

export interface FramedSelectProps {
  items: SelectOption[];
  id: string;
  label: string;
  name: string;
  value?: string;
  disabled?: boolean;
  openUpward?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
}

export const FramedSelect: FC<FramedSelectProps> = ({
  items,
  register,
  id,
  label,
  name,
  value,
  disabled,
  openUpward = false,
}) => {
  const {
    nativeSelectId,
    labelId,
    selectedOption,
    optionsContainerRef,
    customSelectRef,
    isOpen,
    setSelectedOption,
    setIsOpen,
    handleKeyDown,
    handleKeyUp,
  } = useSelectBehavior(items, name, id, value);

  const transition = useTransition(isOpen, {
    config: springConfigHarsh,
    from: { transform: 'scaleY(0)', opacity: 0 },
    enter: { opacity: 1, transform: 'scaleY(1)' },
    leave: { opacity: 0, transform: 'scaleY(0)' },
  });

  return (
    <FormField>
      <NativeSelect
        id={nativeSelectId}
        register={register}
        hidden
        items={items}
        name={name}
        disabled={disabled}
        onChange={(e) => {
          if (selectedOption !== e.target.value) {
            setSelectedOption(e.target.value);
          }
        }}
      />

      <C.SelectLabel
        id={labelId}
        htmlFor={id}
        isInvalid={false}
        disabled={disabled}
        onClick={() => document.getElementById(id)?.focus()}
      >
        {label}
      </C.SelectLabel>
      <C.Select
        tabIndex={disabled ? -1 : 0}
        active={isOpen}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        role="combobox"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-autocomplete="none"
        aria-labelledby={labelId}
        data-disabled={disabled}
        id={id}
        ref={customSelectRef}
      >
        {transition(
          (style, show) =>
            show && (
              <C.AnimatedOptionsContainer
                openUpward={openUpward}
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

        <C.CurrentContainer onClick={() => setIsOpen(!isOpen)}>
          <C.CurrentValue>
            {items.find((item) => item.value === selectedOption)?.label ||
              'Select'}
          </C.CurrentValue>
        </C.CurrentContainer>
      </C.Select>
    </FormField>
  );
};
