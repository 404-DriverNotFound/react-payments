/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { FORM_KEY } from '../../../constants/keys';

const StyledDiv = styled.div<{ styledType: string | undefined }>`
  display: flex;
  padding: 0.75em 1em;
  border-radius: 0.75rem;
  background-color: #eee;
  text-align: center;
  margin: 0.5em 0;
  width: ${({ styledType }) => {
    if (styledType?.includes(FORM_KEY.CARD_PASSWORD)) {
      return '1em';
    } if (styledType === FORM_KEY.CARD_CVC) {
      return '3em';
    } if (styledType === FORM_KEY.CARD_EXPIRATION) {
      return '5em';
    }
    return '';
  }};
  ${({ styledType }) => (styledType === FORM_KEY.CARD_PASSWORD
    ? `display: inline-block;
    margin-right: 0.5em;` : '')};
`;

export type InputContainerProps = {
  className?: string,
  styledType?: string,
  children?: React.ReactNode,
}

const InputContainer = ({
  className, styledType, children, ...rest
}: InputContainerProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledDiv className={className} styledType={styledType} {...rest}>
      {children}
    </StyledDiv>
  );
};

InputContainer.defaultProps = {
  className: '',
  children: null,
};

export default InputContainer;
