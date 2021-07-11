/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import BankSelector, { BankSelectorProps } from './BankSelector';

export default {
  component: BankSelector,
  title: 'organisms/BankSelector',
} as Meta;

// eslint-disable-next-line react/prop-types
const Template: Story<BankSelectorProps> = (args) => (<BankSelector {...args} />);

export const Default = Template.bind({});
Default.args = {
  className: '',
  onClick: () => { console.log('clicked'); },
};