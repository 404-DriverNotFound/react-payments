/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'atoms/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  children: 'Button',
};

export const Submit = Template.bind({});
Submit.args = {
  ...Default.args,
  type: 'submit',
  color: 'blue',
  children: 'Submit',
};

export const Reset = Template.bind({});
Reset.args = {
  ...Default.args,
  type: 'reset',
  children: 'Reset',
};
