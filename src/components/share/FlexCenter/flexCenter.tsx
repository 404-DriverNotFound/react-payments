import React  from 'react';
import './flexCenter.css';

interface FlexCenterProps {
  children: JSX.Element | JSX.Element[];
}

const FlexCenter = ({ children }: FlexCenterProps) => {
  return (
    <div className={'flex-center'}>
      {children}
    </div>
  );
}

export default FlexCenter;