import React from 'react';
import './button.css';

interface ButtonProps {
  variant: string;
  children: string;
  [x: string]: any;
}

const Button = ({ variant = 'primary', children = '다음', ...rest}: ButtonProps) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
};

export default Button;