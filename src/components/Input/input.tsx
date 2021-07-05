import React from 'react';
import './input.css';

interface InputProps {
  size: string;
  children: string;
  placeholder: string;
  [x: string]: any;
}

const Input = (
  {
    size = 'medium',
    children = '입력',
    placeholder = '값을 입력해주십시오...',
    ...rest }: InputProps) => {
  return (
    <input className={`input ${size}`} id={`${size}`} placeholder={placeholder} {...rest} />
  )
}

export default Input;