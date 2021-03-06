import { PrimaryMagicButton } from './PrimaryMagicButton';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { PrimaryMagicButtonProps } from './PrimaryMagicButton.types';

export default {
  title: 'UiKit/Form/Button/PrimaryMagic',
  component: PrimaryMagicButton,
} as Meta;

const Template: Story<PrimaryMagicButtonProps> = (args) => (
  <PrimaryMagicButton {...args}>My Button</PrimaryMagicButton>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
