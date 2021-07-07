/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: inline-block;
  font-size: ${({ className }) => (className?.includes('card-preview__span') ? 'small' : '')};
  width: ${({ className }) => (
    (className?.includes('card-preview__span--expiration')
      || className?.includes('card-preview__span--owner-name'))
      ? '50%' : '')};
  color: ${({ className }) => (className?.includes('card-preview__span') ? '#666' : '')};
  text-align: ${({ className }) => (className?.includes('card-preview__span--expiration') ? 'right' : '')};
  margin-left: ${({ className }) => (className?.includes('card-register__span--card-number') ? '0.5em' : '')};
  margin-right: ${({ className }) => (className?.includes('card-register__span--card-number') ? '0.5em' : '')};
`;

type SpanProps = {
  className?: string,
  children: React.ReactNode,
};

const Span = ({ className, children, ...rest }: SpanProps) => {
  return (
    <StyledSpan className={className} {...rest}>
      {children}
    </StyledSpan>
  );
};

Span.defaultProps = {
  className: '',
};

export default Span;
