/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  component: Card,
  title: 'molecules/Card',
} as Meta;

// eslint-disable-next-line react/prop-types
const Template: Story<CardProps> = (args) => (<Card {...args} />);

export const Default = Template.bind({});
Default.args = {
  className: '',
};
