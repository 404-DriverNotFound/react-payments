import React from 'react';
import './label.css';
import FlexColumn from '@components/share/FlexColumn/flexColumn';

interface LabelProps {
  children: React.ReactNode;
  value: string;
  behavior?: string;
}

const Label = ({ children, value, behavior }: LabelProps) => {
  return (
    <label className={`label ${behavior}`}>
      <FlexColumn>
        <span className={`label-name`}>{value}</span>
        {children}
      </FlexColumn>
    </label>
  );
};

export default Label;
