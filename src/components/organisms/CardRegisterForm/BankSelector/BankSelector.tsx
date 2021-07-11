/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

import * as C from '../../../../constants/cardBanks';
import BankItem from '../../../molecules/BankItem/BankItem';

const StyledDiv = styled.div`
  display: flex;
  width: 30em;
  margin: 1em auto;
`;

type BankSelectorProps = {
  className: string,
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
};

const BankSelector = ({ className, onClick }: BankSelectorProps) => {
  const bankItems = C.BANK_LIST.map((name) => {
    return (
      <BankItem
        color={C.BANK_COLOR[name]}
        bankName={name}
        key={name}
        onClick={onClick}
      />
    );
  });

  return (
    <>
      <StyledDiv className={className}>
        {bankItems.slice(0, 4)}
      </StyledDiv>
      <StyledDiv className={className}>
        {bankItems.slice(4, 8)}
      </StyledDiv>
    </>
  );
};

export default BankSelector;
