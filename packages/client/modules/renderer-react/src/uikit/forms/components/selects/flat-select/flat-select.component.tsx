import * as C from './flat-select.styles';
import { FlatSelectOption, FlatSelectOptionGroup } from './partials';
import { Scrollable } from '@/uikit/common/components';
import { springConfigHarsh } from '@/uikit/core/constants';
import { useSelectBehavior } from '../use-select-behavior';
import { useTransition } from 'react-spring';
import { useMemo, type FC, type PropsWithChildren } from 'react';
import type { SelectOption } from '../select.types';
import clickAudioFile from '../assets/sounds/sfx-uikit-dropdown-click.ogg';
import { useAudio } from '@/uikit/core/hooks';
import type { ControlledInput } from '../../../types';
import { useController } from 'react-hook-form';

export interface SelectOptionsWithGroups {
  items: SelectOption[];
  grouped: SelectOptionGroup[];
}

export interface SelectOptionGroup {
  items: SelectOption[];
  group: string;
}

export interface FlatSelectProps extends ControlledInput<string> {
  items: SelectOptionsWithGroups;
  label: string;
  openUpward?: boolean;
}

export const FlatSelect: FC<PropsWithChildren<FlatSelectProps>> = ({
  openUpward,
  isDisabled,
  id,
  items,
  label,
  name,
  control,
  className,
  defaultValue,
  onChange,
}) => {
  const normalizedItems = useMemo(() => {
    const itemsCopy = [...items.items];
    itemsCopy.unshift(...items.grouped.map((g) => g.items).flat());
    return itemsCopy;
  }, [items]);

  const {
    selectedOption,
    optionsContainerRef,
    customSelectRef,
    isOpen,
    setSelectedOption,
    setIsOpen,
    handleKeyDown,
    handleKeyUp,
  } = useSelectBehavior(normalizedItems, name, id, defaultValue);

  const controller = useController({ name, control, defaultValue });

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

  const clickAudio = useAudio(clickAudioFile, 'sfx');

  return (
    <C.StyledFlatSelect
      className={className}
      tabIndex={isDisabled ? -1 : 0}
      active={isOpen}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      role="combobox"
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-haspopup="true"
      aria-autocomplete="none"
      aria-label={label}
      data-disabled={isDisabled}
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
                                  controller.field.onChange(option.value);
                                  onChange?.(option.value);
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
                          controller.field.onChange(option.value);
                          onChange?.(option.value);
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
      <C.Current
        onClick={() => {
          setIsOpen(!isOpen);
          clickAudio.active.onClick();
        }}
      >
        {normalizedItems.find((item) => item.value === selectedOption)?.label ||
          'Select'}
      </C.Current>
    </C.StyledFlatSelect>
  );
};
