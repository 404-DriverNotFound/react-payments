import React from 'react';
import './button.css';

interface ButtonProps {
  variant: string;
  value: string;
  position: string;
  [x: string]: any;
}

const Button = ({ variant = 'disabled', value = '다음', position = 'bottom-right', ...rest }: ButtonProps) => {
  return (
    <button className={`button ${variant} ${position}`} {...rest}>
      {value}
    </button>
  );
};

export default Button;