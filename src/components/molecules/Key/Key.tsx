/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

const StyledKey = styled.div<{ content: string }>`
  flex: 1;
  margin: 0.25em;
  padding: 1em;
  border-radius: 0.25em;
  background-color: ${({ content }) => (content ? '#eee' : '')};
  text-align: center;
  cursor: ${({ content }) => (content ? 'pointer' : '')};

  &:active {
    background-color: ${({ content }) => (content ? '#ddd' : '')};
  }
`;

export type KeyProps = {
  className?: string,
  children: string,
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
};

const Key = ({ className, children, onClick }: KeyProps) => {
  return (
    <StyledKey
      className={className}
      onClick={children ? onClick : () => {}}
      data-content={children}
      content={children}
    >
      {children}
    </StyledKey>
  );
};

Key.defaultProps = {
  className: '',
};

export default Key;
