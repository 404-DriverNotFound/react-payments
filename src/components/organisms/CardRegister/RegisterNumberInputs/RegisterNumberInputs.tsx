/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

import Span from '../../../atoms/Span/Span';
import Input from '../../../atoms/Input/Input';
import InputContainer from '../../../molecules/InputContainer/InputContainer';

const StyledDiv = styled.div`
  margin-top: 1rem;
`;

type CardRegisterNumberInputsProps = {
  classNames: {
    'container': string,
    'input': string,
    'span': string,
  },
  label: string,
  values: {
    [key: string]: string,
  },
  refs: {
    [key: string]: React.RefObject<any>,
  },
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const CardRegisterNumberInputs = ({
  classNames, label, values, refs, onChange,
}: CardRegisterNumberInputsProps) => {
  return (
    <StyledDiv>
      <label>{label}</label>
      <InputContainer className={classNames.container}>
        <Input
          className={`${classNames.input}__1`}
          type="number"
          name="card-number__1"
          value={values['card-number__1']}
          onChange={onChange}
          key="input__1"
          ref={refs['card-number__1']}
          autoFocus
          required
        />
        <Span className={classNames.span} key="span__1">-</Span>
        <Input
          className={`${classNames.input}__2`}
          type="number"
          name="card-number__2"
          value={values['card-number__2']}
          onChange={onChange}
          key="input__2"
          ref={refs['card-number__2']}
          required
        />
        <Span className={classNames.span} key="span__2">-</Span>
        <Input
          className={`${classNames.input}__3`}
          type="number"
          name="card-number__3"
          value={values['card-number__3']}
          onChange={onChange}
          key="input__3"
          ref={refs['card-number__3']}
          required
        />
        <Span className={classNames.span} key="span__3">-</Span>
        <Input
          className={`${classNames.input}__4`}
          type="number"
          name="card-number__4"
          value={values['card-number__4']}
          onChange={onChange}
          key="input__4"
          ref={refs['card-number__4']}
          required
        />
      </InputContainer>
    </StyledDiv>
  );
};

export default CardRegisterNumberInputs;
