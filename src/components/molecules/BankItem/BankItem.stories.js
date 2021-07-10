/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import BankItem from './BankItem.tsx';

export default {
  component: BankItem,
  title: 'molecules/BankItem',
};

const Template = (args) => <BankItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'red',
  bankName: 'bank name',
  onClick: () => { console.log('clicked'); },
};
