/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
`;

type SpanProps = {
  className?: string,
  text: string,
};

const Span = ({ className, text }: SpanProps) => {
  return (
    <StyledSpan className={className}>
      {text}
    </StyledSpan>
  );
};

Span.defaultProps = {
  className: '',
};

export default Span;
