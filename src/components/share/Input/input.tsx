import React, { ForwardedRef, forwardRef } from 'react';
import './input.css';

interface InputProps {
  purpose?: string;
  placeholder?: string;
  [x: string]: any;
}

const Input = forwardRef(({
                            purpose = 'input-basic',
                            placeholder = '',
                            ...rest
                          }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input ref={ref} className={`input ${purpose}`} placeholder={placeholder} {...rest} />
  );
})

export default Input;