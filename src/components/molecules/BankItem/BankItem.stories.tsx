/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import BankItem, { BankItemProps } from './BankItem';

export default {
  component: BankItem,
  title: 'molecules/BankItem',
} as Meta;

const Template: Story<BankItemProps> = (args) => <BankItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'red',
  bankName: 'bank name',
  onClick: () => { console.log('clicked'); },
};
