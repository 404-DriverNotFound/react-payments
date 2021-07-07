/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Span from './Span.tsx';

export default {
  component: Span,
  title: 'Span',
};

const Template = (args) => <Span {...args} />;

export const Text = Template.bind({});
Text.args = {
  className: '',
  children: 'This is span',
};
