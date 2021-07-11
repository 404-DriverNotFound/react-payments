/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Span, { SpanProps } from './Span';

export default {
  component: Span,
  title: 'atoms/Span',
} as Meta;

const Template: Story<SpanProps> = (args) => <Span {...args} />;

export const Text = Template.bind({});
Text.args = {
  className: '',
  children: 'This is span',
};
