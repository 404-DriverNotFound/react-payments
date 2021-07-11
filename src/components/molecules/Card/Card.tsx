/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

import { bankTypes, BANK_COLOR } from '../../../constants/cardBanks';
import { CARD_STYLE_TYPE } from '../../../constants/keys';
import Span from '../../atoms/Span/Span';

const StyledCard = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  height: 0;
  background-color: ${({ color }) => (color || '#eee')};
  border-radius: 0.3rem;
  padding: 5%;
  padding-top: 30.9%;
  color: #eee;
  text-shadow: 1px 1px 1px #000;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const BankNameContainer = styled.div`
  position: absolute;
  top: 0;
  margin: 5% 0;
`;

const CardChip = styled.div`
  position: absolute;
  top: 1em;
  background-color: #cbba64;
  width: 20%;
  height: 0;
  margin: 10% 0;
  padding-top: 15%;
  border-radius: 0.3rem;
`;

const NumberContainer = styled.div`
  position: absolute;
  bottom: 1.25em;
  left: 0;
  padding: 5% 10%;
  width: 80%;
`;

const NameExpContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5% 10%;
  width: 80%;
`;

export type CardProps = {
  className?: string,
  numbers: string,
  owner: string,
  bankName: bankTypes,
  expiration: string,
};

const Card = ({
  className, numbers, owner, bankName, expiration,
}: CardProps) => {
  return (
    <StyledCard className={className} color={bankName ? BANK_COLOR[bankName] : ''}>
      <BankNameContainer>
        <Span styledType={CARD_STYLE_TYPE.CARD_BANK}>{bankName}</Span>
      </BankNameContainer>
      <CardChip key="card-chip" />
      <NumberContainer>
        <Span styledType={CARD_STYLE_TYPE.CARD_NUMBER} key="card-numbers">{numbers}</Span>
      </NumberContainer>
      <NameExpContainer>
        <Span styledType={CARD_STYLE_TYPE.CARD_OWNER} key="card-owner">{owner}</Span>
        <Span styledType={CARD_STYLE_TYPE.CARD_EXPIRATION} key="card-expiration">{expiration}</Span>
      </NameExpContainer>
    </StyledCard>
  );
};

Card.defaultProps = {
  className: '',
};

export default Card;
