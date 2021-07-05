/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from './Button.tsx';

export default {
  component: Button,
  title: 'Button',
};

const Template = (args) => <Button {...args} />;

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
