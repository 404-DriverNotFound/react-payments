/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0.75em 1em;
  border-radius: 0.75rem;
  background-color: #eee;
  text-align: center;
  margin: 0.5em 0;
  width: ${({ className }) => {
    if (className?.includes('card-register__input-container--card-password')) {
      return '1em';
    } if (className?.includes('card-register__input-container--card-cvc')) {
      return '3em';
    } if (className?.includes('card-register__input-container--card-expiration')) {
      return '5em';
    }
    return '';
  }};
  ${({ className }) => (className?.includes('card-register__input-container--card-password')
    ? `display: inline-block;
    margin-right: 0.5em;` : '')};
`;

type InputContainerProps = {
  className?: string,
  children?: React.ReactNode,
}

const InputContainer = ({
  className, children, ...rest
}: InputContainerProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledDiv className={className} {...rest}>
      {children}
    </StyledDiv>
  );
};

InputContainer.defaultProps = {
  className: '',
  children: null,
};

export default InputContainer;
