/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import VirtualKeyboard, { VirtualKeyboardProps } from './VirtualKeyboard';

export default {
  component: VirtualKeyboard,
  title: 'organisms/VirtualKeyboard',
} as Meta;

// eslint-disable-next-line react/prop-types
const Template: Story<VirtualKeyboardProps> = (args) => (<VirtualKeyboard {...args} />);

export const Default = Template.bind({});
Default.args = {
  className: '',
  onClick: () => { console.log('clicked'); },
};
