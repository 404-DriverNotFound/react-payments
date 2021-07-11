/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

import Key from '../../molecules/Key/Key';

const StyledDiv = styled.div`
  margin: 1em auto;
`;
const StyledKeyboard = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;

export type VirtualKeyboardProps = {
  className: string,
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
}

const numbers: string[] = ['', '', '', '', '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const VirtualKeyboard = ({ className, onClick }: VirtualKeyboardProps) => {
  const randomKeys = numbers.sort(() => (Math.random() - 0.5)).map((content) => (
    <Key
      className={`${className.split('__')[0]}__key`}
      onClick={content ? onClick : () => {}}
      key={content || `${Math.random()}`}
    >
      {content}
    </Key>
  ));
  return (
    <StyledDiv className={className}>
      <StyledKeyboard>
        {randomKeys.slice(0, 5)}
      </StyledKeyboard>
      <StyledKeyboard>
        {randomKeys.slice(5, 10)}
      </StyledKeyboard>
      <StyledKeyboard>
        {randomKeys.slice(10, 15)}
      </StyledKeyboard>
    </StyledDiv>
  );
};

export default VirtualKeyboard;
