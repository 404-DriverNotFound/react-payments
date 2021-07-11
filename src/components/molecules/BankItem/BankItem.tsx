/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

import Span from '../../atoms/Span/Span';

const StyledItem = styled.div`
  flex: auto;
  display: inline-block;
  height: 50%;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
  font-size: small;
`;

const Circle = styled.div`
  width: 5em;
  height: 5em;
  border-radius: 2.5em;
  margin: 0.5em auto;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;

type BankItemProps = {
  color: string,
  bankName: string,
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
};

const BankItem = ({
  color, bankName, onClick,
}: BankItemProps) => {
  return (
    <StyledItem>
      <Circle onClick={onClick} color={color} data-name={bankName} />
      <Span>{bankName}</Span>
    </StyledItem>
  );
};

export default BankItem;
