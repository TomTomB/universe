import { ThemeProvider } from 'styled-components';
import { Tooltip } from './Tooltip';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React, { useRef } from 'react';

describe('Tooltip', () => {
  const TooltipWrapper = () => {
    const triggerRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <button ref={triggerRef}>My button</button>
        <Tooltip triggerRef={triggerRef.current}>Test Tooltip</Tooltip>
      </>
    );
  };

  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <TooltipWrapper />
        </ThemeProvider>,
      ),
    );
  });
});
