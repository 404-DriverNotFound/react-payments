/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta } from '@storybook/react';
import CardRegisterForm from './CardRegisterForm';

export default {
  component: CardRegisterForm,
  title: 'templates/CardRegisterForm',
} as Meta;

const Template = () => (<CardRegisterForm />);

export const Default = Template.bind({});
