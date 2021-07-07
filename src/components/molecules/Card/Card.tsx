/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

import Span from '../../atoms/Span/Span';

const StyledCard = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  height: 0;
  background-color: #eee;
  border-radius: 0.3rem;
  padding: 5%;
  padding-top: 30.9%;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const StyledCardName = styled.div`
  position: absolute;
  top: 0;
  margin: 5% 0;
`;

const StyledCardChip = styled.div`
  position: absolute;
  top: 1em;
  background-color: #cbba64;
  width: 20%;
  height: 0;
  margin: 10% 0;
  padding-top: 15%;
  border-radius: 0.3rem;
`;

const StyledContents = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5% 10%;
  width: 80%;
`;

type CardProps = {
  className?: string,
};

const Card = ({ className }: CardProps) => {
  return (
    <StyledCard className={className}>
      <StyledCardName>
        <Span className="card-preview__span--card-name">CARD NAME</Span>
      </StyledCardName>
      <StyledCardChip key="card-chip" />
      <br />
      <StyledContents>
        <Span className="card-preview__span--card-numbers" key="card-numbers">CARD NUMBERS</Span>
        <br />
        <Span className="card-preview__span--owner-name" key="card-owner">NAME</Span>
        <Span className="card-preview__span--expiration" key="card-date">DATE</Span>
      </StyledContents>
    </StyledCard>
  );
};

Card.defaultProps = {
  className: '',
};

export default Card;
