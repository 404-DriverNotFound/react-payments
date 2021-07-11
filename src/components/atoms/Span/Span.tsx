/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { FORM_KEY, CARD_STYLE_TYPE } from '../../../constants/keys';

const StyledSpan = styled.span<{ styledType: string | undefined }>`
  ${({ styledType }) => (styledType?.includes(FORM_KEY.CARD_NUMBER) ? 'flex: 0.2; height: 100%;' : '')}
  display: inline-block;
  font-size: ${({ styledType }) => (styledType?.includes(CARD_STYLE_TYPE.COMMON) ? 'small' : '')};
  ${({ styledType }) => {
    switch (styledType) {
      case CARD_STYLE_TYPE.CARD_EXPIRATION:
        return 'flex: 0.2';
      case CARD_STYLE_TYPE.CARD_OWNER:
        return 'flex: 1;';
      default:
        return '';
    }
  }};
  text-align: ${({ styledType }) => (styledType === CARD_STYLE_TYPE.CARD_EXPIRATION ? 'right' : '')};
`;

export type SpanProps = {
  className?: string,
  styledType?: string,
  children: React.ReactNode,
};

const Span = ({
  className, styledType, children, ...rest
}: SpanProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledSpan className={className} styledType={styledType} {...rest}>
      {children}
    </StyledSpan>
  );
};

Span.defaultProps = {
  className: '',
  styledType: '',
};

export default Span;
