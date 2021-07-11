/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

import { FORM_KEY } from '../../../../constants/keys';
import Span from '../../../atoms/Span/Span';
import Input from '../../../atoms/Input/Input';
import InputContainer from '../../../molecules/InputContainer/InputContainer';

const StyledDiv = styled.div`
  margin-top: 1rem;
`;

export type CardRegisterNumberInputsProps = {
  label: string,
  values: {
    [key: string]: string,
  },
  refs: {
    [key: string]: React.RefObject<any>,
  },
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  // eslint-disable-next-line no-unused-vars
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void,
}

const CardRegisterNumberInputs = ({
  label, values, refs, onChange, onFocus,
}: CardRegisterNumberInputsProps) => {
  return (
    <StyledDiv>
      <label>{label}</label>
      <InputContainer styledType={FORM_KEY.CARD_NUMBER}>
        <Input
          type="number"
          styledType={FORM_KEY.CARD_NUMBER_FIRST}
          name={FORM_KEY.CARD_NUMBER_FIRST}
          value={values[FORM_KEY.CARD_NUMBER_FIRST]}
          onChange={onChange}
          key="input__1"
          ref={refs[FORM_KEY.CARD_NUMBER_FIRST]}
          autoFocus
          required
        />
        <Span key="span__1" styledType={FORM_KEY.CARD_NUMBER}>-</Span>
        <Input
          type="number"
          styledType={FORM_KEY.CARD_NUMBER_SECOND}
          name={FORM_KEY.CARD_NUMBER_SECOND}
          value={values[FORM_KEY.CARD_NUMBER_SECOND]}
          onChange={onChange}
          key="input__2"
          ref={refs[FORM_KEY.CARD_NUMBER_SECOND]}
          required
        />
        <Span key="span__2" styledType={FORM_KEY.CARD_NUMBER}>-</Span>
        <Input
          type="number"
          styledType={FORM_KEY.CARD_NUMBER_THIRD}
          name={FORM_KEY.CARD_NUMBER_THIRD}
          value={values[FORM_KEY.CARD_NUMBER_THIRD]}
          onChange={onChange}
          onFocus={onFocus}
          key="input__3"
          ref={refs[FORM_KEY.CARD_NUMBER_THIRD]}
          required
        />
        <Span key="span__3" styledType={FORM_KEY.CARD_NUMBER}>-</Span>
        <Input
          type="number"
          styledType={FORM_KEY.CARD_NUMBER_FOURTH}
          name={FORM_KEY.CARD_NUMBER_FOURTH}
          value={values[FORM_KEY.CARD_NUMBER_FOURTH]}
          onChange={onChange}
          onFocus={onFocus}
          key="input__4"
          ref={refs[FORM_KEY.CARD_NUMBER_FOURTH]}
          required
        />
      </InputContainer>
    </StyledDiv>
  );
};

export default CardRegisterNumberInputs;
