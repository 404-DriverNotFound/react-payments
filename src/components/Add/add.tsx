import React from 'react';
import FlexCenter from '@components/FlexCenter/flexCenter'
import './add.css';

const Add = () => {
  return (
    <>
      <div className={`card`}>
        <FlexCenter>
          <div className={`add`}>
            <div className={`plus`}>
            </div>
          </div>
        </FlexCenter>
      </div>
    </>
  );
}

export default Add;