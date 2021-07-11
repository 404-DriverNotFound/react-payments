/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input from '../../atoms/Input/Input';
import Span from '../../atoms/Span/Span';
import InputContainer, { InputContainerProps } from './InputContainer';
import * as InputStories from '../../atoms/Input/Input.stories';

export default {
  component: InputContainer,
  title: 'molecules/InputContainer',
} as Meta;

// eslint-disable-next-line react/prop-types
const Template: Story<InputContainerProps> = ({ children, ...args }) => (
  <InputContainer {...args}>
    {children}
  </InputContainer>
);

export const Default = Template.bind({});
Default.args = {
  className: '',
  children: [
    <Input
      key="input__1"
      {...InputStories.Text.args}
    />,
  ],
};

export const CardNumbers = Template.bind({});
CardNumbers.args = {
  className: 'card-register__input--card-numbers',
  children: [
    <Input
      className="card-register__input--card-number"
      type="number"
      value="1234"
      key="input__1"
    />,
    <Span className="card-register__span--card-number" key="span__1">-</Span>,
    <Input
      className="card-register__input--card-number"
      type="number"
      value="5678"
      key="input__2"
    />,
    <Span className="card-register__span--card-number" key="span__2">-</Span>,
    <Input
      className="card-register__input--card-number"
      type="number"
      value="1234"
      key="input__3"
    />,
    <Span className="card-register__span--card-number" key="span__3">-</Span>,
    <Input
      className="card-register__input--card-number"
      type="number"
      value="5678"
      key="input__4"
    />,
  ],
};
