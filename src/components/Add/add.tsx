import React from 'react';
import FlexCenter from '@components/FlexCenter/flexCenter'
import './add.css';
import View from '@constant/constant';

interface AddProps {
  onClick: (value: number) => void;
}

const Add = ({ onClick }: AddProps) => {
  const goToAddView = () => {
    onClick(View.Add);
  };
  return (
    <>
      <div className={`card`} onClick={goToAddView}>
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