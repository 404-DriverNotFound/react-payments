import React, { ReactChild } from 'react';
import './flexColumn.css';

interface FlexColumnProps {
  children: ReactChild
}

const FlexColumn = ({children}: FlexColumnProps) => {
  return (
    <div className='flexColumn'>
      {children}
    </div>
  );
}

export default FlexColumn;