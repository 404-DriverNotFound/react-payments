/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
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
