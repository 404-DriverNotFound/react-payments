import React from 'react';
import './flexSpaceBetween.css';

interface FlexSpaceBetweenProps {
  children: JSX.Element | JSX.Element[];
}

const FlexSpaceBetween = ({ children }: FlexSpaceBetweenProps) => {
  return (
    <div className={'flex-space-between'}>
      {children}
    </div>
  );
};

export default FlexSpaceBetween;