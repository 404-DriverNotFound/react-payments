/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

export default {
  component: Modal,
  title: 'molecules/Modal',
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  display: true,
  children: 'modal contents',
  onBackgroundClick: () => { console.log('clicked'); },
};
