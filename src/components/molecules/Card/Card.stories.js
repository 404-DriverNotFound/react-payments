/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Card from './Card.tsx';

export default {
  component: Card,
  title: 'Card',
};

// eslint-disable-next-line react/prop-types
const Template = (args) => (<Card {...args} />);

export const Default = Template.bind({});
Default.args = {
  className: '',
};
