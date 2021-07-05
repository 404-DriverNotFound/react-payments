import React from 'react';
import FlexCenter from '@components/share/FlexCenter/flexCenter'
import CardContainer from '../CardContainer/cardContainer';
import View from '@constant/constant';
import './add.css';

interface AddProps {
  onClick: (value: number) => void;
}

const Add = ({ onClick }: AddProps) => {
  const goToAddView = () => {
    onClick(View.Add);
  };
  return (
    <>
      <CardContainer type={'add-container'} onClick={goToAddView}>
        <FlexCenter>
          <div className={`add`}>
            <div className={`plus`}>
            </div>
          </div>
        </FlexCenter>
      </CardContainer>
    </>
  );
}

export default Add;