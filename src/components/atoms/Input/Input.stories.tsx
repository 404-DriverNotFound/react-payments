/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  component: Input,
  title: 'atoms/Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  className: '',
  type: 'text',
  value: 'text',
  placeholder: 'placeholder',
};

export const Num = Template.bind({});
Num.args = {
  className: '',
  type: 'number',
  value: '123',
};

export const Digit = Template.bind({});
Digit.args = {
  className: '',
  type: 'number',
  value: '1',
};
