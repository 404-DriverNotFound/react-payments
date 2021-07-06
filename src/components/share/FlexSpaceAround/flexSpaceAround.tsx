import React from 'react';
import './flexSpaceAround.css';

interface FlexSpaceAroundProps {
  children: JSX.Element | JSX.Element[];
}

const FlexSpaceAround = ({ children }: FlexSpaceAroundProps) => {
  return (
    <div className={'flex-space-around'}>
      {children}
    </div>
  );
};

export default FlexSpaceAround;