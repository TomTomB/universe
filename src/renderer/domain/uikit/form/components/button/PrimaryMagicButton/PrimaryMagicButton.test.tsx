import { PrimaryMagicButton } from './PrimaryMagicButton';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('PrimaryMagicButton', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <PrimaryMagicButton>Test Button</PrimaryMagicButton>
        </ThemeProvider>,
      ),
    );
  });
});
