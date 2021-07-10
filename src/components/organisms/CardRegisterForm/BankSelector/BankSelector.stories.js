/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BankSelector from './BankSelector.tsx';

export default {
  component: BankSelector,
  title: 'BankSelector',
};

// eslint-disable-next-line react/prop-types
const Template = (args) => (<BankSelector {...args} />);

export const Default = Template.bind({});
Default.args = {
  className: '',
  onClick: () => { console.log('clicked'); },
};
