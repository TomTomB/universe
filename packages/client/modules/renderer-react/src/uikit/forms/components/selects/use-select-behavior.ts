import { generateShortId } from '@/core/util';
import { useClickOutside, useCompare } from '@/uikit/core/hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { SelectOption } from './select.types';

const getOption = ({
  selectId,
  optionIndex,
}: {
  selectId: string;
  optionIndex: number;
}) => {
  return document.querySelector<HTMLLIElement>(
    `#${selectId} [data-index="${optionIndex}"]`,
  );
};

const updateOptionFocus = ({
  selectId,
  optionIndex,
}: {
  selectId: string;
  optionIndex: number;
}) => {
  const optionElement = getOption({ selectId, optionIndex });
  optionElement?.focus();
};

export const useSelectBehavior = (
  items: SelectOption[],
  name: string,
  id: string,
  value?: string,
) => {
  const labelId = useMemo(() => {
    return generateShortId();
  }, []);

  const [selectedOption, setSelectedOption] = useState(
    !value && items.length ? items[0].value : value,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentFocusedOptionIndex, setCurrentFocusedOptionIndex] = useState(
    selectedOption ? items.findIndex((i) => i.value === selectedOption) : 0,
  );
  const optionsContainerRef = useRef(null);
  const customSelectRef = useRef<HTMLDivElement>(null);

  useClickOutside(optionsContainerRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const isOpenChanged = useCompare(isOpen);

  useEffect(() => {
    if (isOpen) {
      const option = items[currentFocusedOptionIndex];
      if (option) {
        const optionElement = getOption({
          selectId: id,
          optionIndex: currentFocusedOptionIndex,
        });
        optionElement?.focus();

        optionElement?.scrollIntoView({ block: 'center' });
      }
    }
  }, [isOpen, isOpenChanged, currentFocusedOptionIndex, items, id]);

  useEffect(() => {
    setCurrentFocusedOptionIndex(
      items.findIndex((i) => i.value === selectedOption),
    );
  }, [selectedOption, name, items]);

  let searchTerm = '';
  let debounceTimeout: number | null = null;

  const trySelectOption = (atIndex: number, dir?: 'next' | 'prev') => {
    const itemToSelect = items[atIndex];
    if (itemToSelect) {
      if (itemToSelect.disabled) {
        if (dir === 'prev') {
          trySelectOption(atIndex - 1, dir);
        } else if (dir === 'next') {
          trySelectOption(atIndex + 1, dir);
        }

        return;
      }

      setSelectedOption(itemToSelect.value);
      if (isOpen) {
        updateOptionFocus({
          selectId: id,
          optionIndex: atIndex,
        });
      }
    }
  };

  const searchAndSelectOption = () => {
    const searchedOptionIndex = items.findIndex((option) => {
      return (
        option.label.toLowerCase().startsWith(searchTerm) && !option.disabled
      );
    });
    trySelectOption(searchedOptionIndex);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case 'Enter':
      case 'Space':
        if (isOpen) {
          setIsOpen(false);
          customSelectRef.current?.focus();
        } else {
          setIsOpen(true);
        }
        break;

      case 'Escape':
      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
          customSelectRef.current?.focus();
        }

        break;

      case 'ArrowDown':
        if (event.altKey && !isOpen) {
          setIsOpen(true);
        }

        trySelectOption(currentFocusedOptionIndex + 1, 'next');
        break;

      case 'ArrowUp':
        if (event.altKey && !isOpen) {
          setIsOpen(true);
        }

        trySelectOption(currentFocusedOptionIndex - 1, 'prev');
        break;

      default:
        if (debounceTimeout) {
          window.clearTimeout(debounceTimeout);
        }
        searchTerm += event.key;
        debounceTimeout = window.setTimeout(() => {
          searchTerm = '';
        }, 500);

        searchAndSelectOption();
        break;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      event.code === 'Tab' ||
      event.code === 'ArrowDown' ||
      event.code === 'ArrowUp'
    ) {
      if (isOpen) {
        event.preventDefault();
      }
    }
  };

  return {
    labelId,
    selectedOption,
    setSelectedOption,
    isOpen,
    setIsOpen,
    currentFocusedOptionIndex,
    setCurrentFocusedOptionIndex,
    optionsContainerRef,
    customSelectRef,
    handleKeyDown,
    handleKeyUp,
  };
};
