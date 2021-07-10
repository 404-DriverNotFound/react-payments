/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Modal from './Modal.tsx';

export default {
  component: Modal,
  title: 'molecules/Modal',
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  display: true,
  children: 'modal contents',
  onBackgroundClick: () => { console.log('clicked'); },
};
