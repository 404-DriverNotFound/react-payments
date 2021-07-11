/* eslint-disable arrow-body-style */
import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { FORM_KEY } from '../../../constants/keys';

const StyledInput = styled.input<{ styledType: string | undefined }>`
  padding: 0;
  flex: 1;
  line-height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: ${({ styledType }) => (styledType === FORM_KEY.CARD_OWNER ? '' : 'center')};
  width: ${({ styledType }) => {
    switch (styledType) {
      case FORM_KEY.CARD_EXPIRATION:
        return '5em';
      case FORM_KEY.CARD_CVC:
        return '3em';
      case FORM_KEY.CARD_PASSWORD:
        return '1em';
      default:
        return '100%';
    }
  }};

  -webkit-text-security: ${({ styledType }) => (
    (styledType === FORM_KEY.CARD_NUMBER_THIRD
    || styledType === FORM_KEY.CARD_NUMBER_FOURTH
    || styledType === FORM_KEY.CARD_CVC
    || styledType === FORM_KEY.CARD_PASSWORD)
      ? 'disc' : ''
  )};
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export type InputProps = {
  className?: string,
  type?: string,
  styledType?: string,
  name?: string,
  value?: string,
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  // eslint-disable-next-line no-unused-vars
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
  placeholder?: string,
  required?: boolean,
  autoFocus?: boolean,
};

const Input = React.forwardRef(({
  className, type, styledType, name, value,
  onFocus, onChange, placeholder, required, autoFocus, ...rest
}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <StyledInput
      className={className}
      ref={ref}
      type={type}
      styledType={styledType}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      required={required}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
});

Input.defaultProps = {
  className: '',
  name: '',
  type: 'text',
  styledType: '',
  value: '',
  onChange: () => {},
  onFocus: () => {},
  placeholder: '',
  required: false,
  autoFocus: false,
};

export default Input;
