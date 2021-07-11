/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Key, { KeyProps } from './Key';

export default {
  component: Key,
  title: 'molecules/Key',
} as Meta;

const Template: Story<KeyProps> = (args) => <Key {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '0',
  onClick: () => { console.log('clicked'); },
};
