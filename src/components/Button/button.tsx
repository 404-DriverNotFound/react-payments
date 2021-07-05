import React from 'react';
import './button.css';

const Button = ({ variant = 'primary', children, ...rest} ) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button;