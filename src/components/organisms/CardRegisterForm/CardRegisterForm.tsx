/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button/Button';
import Span from '../../atoms/Span/Span';
import Input from '../../atoms/Input/Input';
import Card from '../../molecules/Card/Card';
import InputContainer from '../../molecules/InputContainer/InputContainer';

const StyledForm = styled.form`
  min-width: 22em;
  max-width: 30em;
  background-color: #fff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  margin: 3rem 10%;
  padding: 2rem;
`;

const InlineBlockDiv = styled.div`
  display: inline-block;
  width: 50%;
`;

type CardRegisterFormProps = {
  className?: string,
};

const CardRegisterForm = ({ className }: CardRegisterFormProps) => {
  const [values, setValues] = useState({
    'card-number__1': '',
    'card-number__2': '',
    'card-number__3': '',
    'card-number__4': '',
    'card-expiration': '',
    'card-cvc': '',
    'card-owner': '',
    'card-password__1': '',
    'card-password__2': '',
  });

  type refObjType = {
    [key: string]: React.RefObject<HTMLInputElement> | React.RefObject<HTMLButtonElement>;
  };

  const refs: refObjType = {
    'card-number__1': useRef<HTMLInputElement>(null),
    'card-number__2': useRef<HTMLInputElement>(null),
    'card-number__3': useRef<HTMLInputElement>(null),
    'card-number__4': useRef<HTMLInputElement>(null),
    'card-expiration': useRef<HTMLInputElement>(null),
    'card-cvc': useRef<HTMLInputElement>(null),
    'card-owner': useRef<HTMLInputElement>(null),
    'card-password__1': useRef<HTMLInputElement>(null),
    'card-password__2': useRef<HTMLInputElement>(null),
    'submit-button': useRef<HTMLButtonElement>(null),
  };

  const handleCardNumberChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (value.length > 4) {
      return;
    } if (value.length === 4 && name === 'card-number__4') {
      refs['card-expiration'].current?.focus();
    } else if (value.length === 4) {
      refs[`card-number__${Number(name.substr(-1)) + 1}`].current?.focus();
    }
    setValues({ ...values, [name]: value });
  };

  const handleExpirationChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (value.length > 5) {
      return;
    } if (value.length === 2 && values[name].length === 1) {
      setValues({ ...values, [name]: `${value}/` });
      return;
    } if (value.length === 3 && values[name].length === 2) {
      setValues({ ...values, [name]: `${value.substr(0, 2)}/${value[2]}` });
      return;
    } if (value.length === 3 && values[name].length === 4) {
      setValues({ ...values, [name]: value.substr(0, 2) });
      return;
    } if (value.length === 5) {
      refs['card-cvc'].current?.focus();
    }
    setValues({ ...values, [name]: value });
  };

  const handleCVCChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (value.length > 3) {
      return;
    } if (value.length === 3) {
      refs['card-owner'].current?.focus();
    }
    setValues({ ...values, [name]: value });
  };

  const handleOwnerNameChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };

  const handlePasswordChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (value.length > 1) {
      return;
    }
    if (name === 'card-password__1') {
      refs['card-password__2'].current?.focus();
    } else {
      refs['submit-button'].current?.focus();
    }
    setValues({ ...values, [name]: value });
  };

  // TODO: 반복되는 props 묶어 쓸 방법 있는지 알아보기

  return (
    <StyledForm className={className}>
      <Card className="card-register__card-preview" />
      <br />
      <label>카드 번호</label>
      <InputContainer className="card-register__input-container--card-number">
        <Input
          className="card-register__input--card-number"
          type="number"
          name="card-number__1"
          value={values['card-number__1']}
          onChange={handleCardNumberChange}
          key="input__1"
          ref={refs['card-number__1']}
          autoFocus
          required
        />
        <Span className="card-register__span--card-number" key="span__1">-</Span>
        <Input
          className="card-register__input--card-number"
          type="number"
          name="card-number__2"
          value={values['card-number__2']}
          onChange={handleCardNumberChange}
          key="input__2"
          ref={refs['card-number__2']}
          required
        />
        <Span className="card-register__span--card-number" key="span__2">-</Span>
        <Input
          className="card-register__input--card-number"
          type="number"
          name="card-number__3"
          value={values['card-number__3']}
          onChange={handleCardNumberChange}
          key="input__3"
          ref={refs['card-number__3']}
          required
        />
        <Span className="card-register__span--card-number" key="span__3">-</Span>
        <Input
          className="card-register__input--card-number"
          type="number"
          name="card-number__4"
          value={values['card-number__4']}
          onChange={handleCardNumberChange}
          key="input__4"
          ref={refs['card-number__4']}
          required
        />
      </InputContainer>
      <InlineBlockDiv position="left">
        <label>카드 유효기간</label>
        <InputContainer className="card-register__input-container--card-expiration">
          <Input
            className="card-register__input--card-expiration"
            name="card-expiration"
            value={values['card-expiration']}
            onChange={handleExpirationChange}
            ref={refs['card-expiration']}
            required
          />
        </InputContainer>
      </InlineBlockDiv>
      <InlineBlockDiv position="right">
        <label htmlFor="card-cvc">뒷면 보안코드 3자리</label>
        <InputContainer className="card-register__input-container--card-cvc">
          <Input
            className="card-register__input--card-cvc"
            type="number"
            name="card-cvc"
            value={values['card-cvc']}
            placeholder="CVC"
            onChange={handleCVCChange}
            ref={refs['card-cvc']}
            required
          />
        </InputContainer>
      </InlineBlockDiv>
      <br />
      <label>카드 소유자 이름</label>
      <InputContainer className="card-register__input-container--card-owner">
        <Input
          className="card-register__input--card-owner"
          type="text"
          name="card-owner"
          value={values['card-owner']}
          onChange={handleOwnerNameChange}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요"
          ref={refs['card-owner']}
          required
        />
      </InputContainer>
      <label>
        비밀번호 앞 2자리
        <br />
        <InputContainer className="card-register__input-container--card-password" key="card-password__1">
          <Input
            className="card-register__input--card-password"
            type="password"
            name="card-password__1"
            value={values['card-password__1']}
            onChange={handlePasswordChange}
            ref={refs['card-password__1']}
            required
          />
        </InputContainer>
        <InputContainer className="card-register__input-container--card-password" key="card-password__2">
          <Input
            className="card-register__input--card-password"
            type="password"
            name="card-password__2"
            value={values['card-password__2']}
            onChange={handlePasswordChange}
            ref={refs['card-password__2']}
            required
          />
        </InputContainer>
        * *
      </label>
      <br />
      <Button
        className="card-register__button--submit"
        color="blue"
        type="submit"
        ref={refs['submit-button']}
      >
        다음
      </Button>
      <Button className="card-register__button--cancel">취소</Button>
    </StyledForm>
  );
};

CardRegisterForm.defaultProps = {
  className: '',
};

export default CardRegisterForm;
