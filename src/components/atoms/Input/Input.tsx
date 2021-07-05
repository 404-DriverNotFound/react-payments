/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

type InputProps = {
  className?: string,
  type?: string,
  value?: string,
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
};

const Input = ({
  className, type, value, onChange, placeholder,
}: InputProps) => {
  return (
    <StyledInput
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.defaultProps = {
  className: '',
  type: 'text',
  value: '',
  placeholder: '',
};

export default Input;
