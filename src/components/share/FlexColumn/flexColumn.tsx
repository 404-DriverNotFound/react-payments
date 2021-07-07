import React from 'react';
import './flexColumn.css';

interface FlexColumnProps {
  children: React.ReactNode;
}

const FlexColumn = ({children}: FlexColumnProps) => {
  return (
    <div className='flex-column'>
      {children}
    </div>
  );
}

export default FlexColumn;