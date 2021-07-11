/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardRegisterForm, { CardRegisterFormProps } from './CardRegisterForm';

export default {
  component: CardRegisterForm,
  title: 'templates/CardRegisterForm',
} as Meta;

const Template: Story<CardRegisterFormProps> = (args) => (<CardRegisterForm {...args} />);

export const Default = Template.bind({});
Default.args = {
  className: '',
};
