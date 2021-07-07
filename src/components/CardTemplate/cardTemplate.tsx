import React from 'react';
import CardContainer from '@components/share/CardContainer/cardContainer';
import FlexColumn from '@components/share/FlexColumn/flexColumn';
import FlexSpaceAround from '@components/share/FlexSpaceAround/flexSpaceAround';
import './cardTemplate.css';
import { strSplice } from '@utils/utils';
import FlexSpaceBetween from '@components/share/FlexSpaceBetween/flexSpaceBetween';
import CardChip from '@components/CardChip/cardChip';

interface CardProps {
  brandName: string;
  firstNumbers: string;
  secondNumbers: string;
  thirdNumbers: string;
  fourthNumbers: string;
  expireDate: string;
  publisher: string;
}

const CardTemplate = ({
  brandName,
  firstNumbers,
  secondNumbers,
  thirdNumbers,
  fourthNumbers,
  expireDate,
  publisher,
}: CardProps) => {
  const expireDateFormat =
    expireDate?.length === 4 ? strSplice(expireDate, '/', 0, 2) : expireDate;
  return (
    <>
      <CardContainer type={'basic-container'}>
        <FlexColumn>
          <div className={`card ${brandName}`}>
            <CardChip />
            <FlexSpaceAround>
              <span className={'card-number'}>{firstNumbers}</span>
              <span className={'card-number'}>-</span>
              <span className={'card-number'}>{secondNumbers}</span>
              <span className={'card-number'}>-</span>
              <span className={'card-number input-secret'}>{thirdNumbers}</span>
              <span className={'card-number'}>-</span>
              <span className={'card-number input-secret'}>
                {fourthNumbers}
              </span>
            </FlexSpaceAround>
            <FlexSpaceBetween>
              <div className={'expire-date'}>{expireDateFormat}</div>
              <div className={'publisher'}>{publisher}</div>
            </FlexSpaceBetween>
          </div>
        </FlexColumn>
      </CardContainer>
    </>
  );
};

export default CardTemplate;
