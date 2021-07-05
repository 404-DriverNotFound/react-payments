import React, { ReactChild } from 'react';
import './flexCenter.css';

interface FlexCenterProps {
  children: ReactChild;
}

const FlexCenter = ({ children }: FlexCenterProps) => {
  return (
    <div className={'flex-center'}>
      {children}
    </div>
  );
}

export default FlexCenter;