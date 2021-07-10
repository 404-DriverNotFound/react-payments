/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
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
  return (
    <>
      <StyledDiv className={className}>
        {C.BANK_LIST.map((name, idx) => {
          if (idx < 4) {
            return (
              <BankItem
                color={C.BANK_COLOR[name]}
                bankName={name}
                key={name}
                onClick={onClick}
              />
            );
          }
          return null;
        })}
      </StyledDiv>
      <StyledDiv className={className}>
        {C.BANK_LIST.map((name, idx) => {
          if (idx > 3) {
            return (
              <BankItem
                color={C.BANK_COLOR[name]}
                bankName={name}
                key={name}
                onClick={onClick}
              />
            );
          }
          return null;
        })}
      </StyledDiv>
    </>
  );
};

export default BankSelector;
