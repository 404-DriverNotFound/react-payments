/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  children?: React.ReactNode,
};

const Button = ({
  className, color, type, onClick, children,
}: ButtonProps) => {
  return (
  // eslint-disable-next-line react/button-has-type
    <StyledButton
      className={className}
      type={type}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  className: '',
  color: 'default',
  type: 'button',
  onClick: null,
  children: null,
};

export default Button;
