/* eslint-disable arrow-body-style */
import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0.2em;
  padding: 1em;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  outline: none;
  background-color: ${({ color }) => (color === 'default' ? '#eee' : '#00bcd4')};
  color: ${({ color }) => (color === 'default' ? '#000' : '#fff')};
  &:hover {
    background-color: ${({ color }) => (color === 'default' ? '#ddd' : '#018c9e')};
  }
`;

type ButtonProps = {
  className?: string,
  color?: 'default' | 'blue',
  type?: 'button' | 'submit' | 'reset',
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  children?: React.ReactNode,
};

const Button = React.forwardRef(({
  className, color, type, onClick, children,
}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
  // eslint-disable-next-line react/button-has-type
    <StyledButton
      className={className}
      ref={ref}
      type={type}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  className: '',
  color: 'default',
  type: 'button',
  children: null,
};

export default Button;
