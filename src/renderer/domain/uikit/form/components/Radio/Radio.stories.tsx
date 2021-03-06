import { Radio } from './Radio';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { RadioProps } from './Radio.types';

export default {
  title: 'UiKit/Form/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select a foo',
  name: 'foo',
  value: 'foo',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Select a foo',
  name: 'foo',
  value: 'foo',
};
