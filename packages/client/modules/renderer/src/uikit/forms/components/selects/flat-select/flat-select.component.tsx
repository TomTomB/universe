import * as C from './flat-select.styles';
import { FlatSelectOption, FlatSelectOptionGroup } from './partials';
import { NativeSelect } from '../native-select';
import { Scrollable } from '@/uikit/common/components';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useSelectBehavior } from '../use-select-behavior';
import { useTransition } from 'react-spring';
import { useMemo } from 'react';
import type { FC, PropsWithChildren } from 'react';
import type { SelectOption } from '../select.types';
import type { UseFormRegister } from 'react-hook-form';

export interface SelectOptionsWithGroups {
  items: SelectOption[];
  grouped: SelectOptionGroup[];
}

export interface SelectOptionGroup {
  items: SelectOption[];
  group: string;
}

export interface FlatSelectProps {
  items: SelectOptionsWithGroups;
  id: string;
  label: string;
  name: string;
  value?: string;
  disabled?: boolean;
  openUpward?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
}

export const FlatSelect: FC<PropsWithChildren<FlatSelectProps>> = ({
  openUpward = false,
  disabled,
  id,
  items,
  label,
  name,
  register,
  value,
}) => {
  const normalizedItems = useMemo(() => {
    const itemsCopy = [...items.items];
    itemsCopy.unshift(...items.grouped.map((g) => g.items).flat());
    return itemsCopy;
  }, [items]);

  const {
    nativeSelectId,
    selectedOption,
    optionsContainerRef,
    customSelectRef,
    isOpen,
    setSelectedOption,
    setIsOpen,
    handleKeyDown,
    handleKeyUp,
  } = useSelectBehavior(normalizedItems, name, id, value);

  const translateY = openUpward ? '-10px' : '10px';
  const transition = useTransition(isOpen, {
    config: springConfigHarsh,
    from: {
      opacity: 0,
      transform: `scale(0.25) translate(10px, ${translateY})`,
    },
    enter: { opacity: 1, transform: 'scale(1) translate(0, 0)' },
    leave: {
      opacity: 0,
      transform: `scale(0.25) translate(10px,${translateY})`,
    },
  });

  return (
    <>
      <NativeSelect
        id={nativeSelectId}
        register={register}
        hidden
        items={normalizedItems}
        name={name}
        disabled={disabled}
        onChange={(e) => {
          if (selectedOption !== e.target.value) {
            setSelectedOption(e.target.value);
          }
        }}
      />

      <C.StyledFlatSelect
        tabIndex={disabled ? -1 : 0}
        active={isOpen}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        role="combobox"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-autocomplete="none"
        aria-label={label}
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
                  {items.grouped.map(
                    (group) =>
                      group && (
                        <FlatSelectOptionGroup
                          key={group.group}
                          name={group.group}
                        >
                          {group.items.map(
                            (option) =>
                              option && (
                                <FlatSelectOption
                                  index={normalizedItems.indexOf(option)}
                                  disabled={option.disabled}
                                  key={option.label + option.value}
                                  selected={selectedOption === option.value}
                                  onClick={() => {
                                    setSelectedOption(option.value);
                                    setIsOpen(false);
                                  }}
                                >
                                  {option.label}
                                </FlatSelectOption>
                              ),
                          )}
                        </FlatSelectOptionGroup>
                      ),
                  )}

                  {items.items.map(
                    (option) =>
                      option && (
                        <FlatSelectOption
                          index={normalizedItems.indexOf(option)}
                          disabled={option.disabled}
                          key={option.label + option.value}
                          selected={selectedOption === option.value}
                          onClick={() => {
                            setSelectedOption(option.value);
                            setIsOpen(false);
                          }}
                        >
                          {option.label}
                        </FlatSelectOption>
                      ),
                  )}
                </Scrollable>
              </C.AnimatedOptionsContainer>
            ),
        )}
        <C.Current onClick={() => setIsOpen(!isOpen)}>
          {normalizedItems.find((item) => item.value === selectedOption)
            ?.label || 'Select'}
        </C.Current>
      </C.StyledFlatSelect>
    </>
  );
};
