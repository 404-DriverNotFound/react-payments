/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import CardRegisterForm from './CardRegisterForm.tsx';

export default {
  component: CardRegisterForm,
  title: 'templates/CardRegisterForm',
};

// eslint-disable-next-line react/prop-types
const Template = (args) => (<CardRegisterForm {...args} />);

export const Default = Template.bind({});
Default.args = {
  className: '',
};
