import React from 'react';
import './label.css';

interface LabelProps {
  children: JSX.Element | JSX.Element[];
  value: string;
}

const Label = ({ children, value }: LabelProps) => {
  return (
    <label className={'label'}>
      <div className={'label-name'}>
        {value}
      </div>
      {children}
    </label>
  );
};

export default Label;