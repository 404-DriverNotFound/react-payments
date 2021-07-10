/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Input from '../../atoms/Input/Input';
import Card from '../../molecules/Card/Card';
import Modal from '../../molecules/Modal/Modal';
import BankSelector from '../../organisms/CardRegisterForm/BankSelector/BankSelector';
import InputContainer from '../../molecules/InputContainer/InputContainer';
import CardRegisterNumberInputs from '../../organisms/CardRegisterForm/RegisterNumberInputs/RegisterNumberInputs';
import CardRegisterButtons from '../../organisms/CardRegisterForm/RegisterButtons/RegisterButtons';

const StyledForm = styled.form`
  float: center;
  min-width: 22em;
  max-width: 30em;
  background-color: #fff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  margin: 3rem auto;
  padding: 2rem;
`;

const InlineBlockDiv = styled.div`
  display: inline-block;
  width: 50%;
`;

type CardRegisterFormProps = {
  className?: string,
};

type valueObjType = {
  [key: string]: string;
};

type modalContentType = 'BankSelector' | 'VirtualKeyboard';

const CardRegisterForm = ({ className }: CardRegisterFormProps) => {
  // eslint-disable-next-line no-unused-vars
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [modalContent, setModalContent] = useState<modalContentType>('BankSelector');
  const [values, setValues] = useState<valueObjType>({
    'card-bank': '',
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
    [key: string]: React.RefObject<any>;
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
    }
    if (value.length === 4) {
      if (name === 'card-number__2') {
        setValues({ ...values, [name]: value });
        setModalContent('BankSelector');
        setIsModalDisplayed(true);
      } else if (name === 'card-number__4') {
        refs['card-expiration'].current?.focus();
      } else {
        refs[`card-number__${Number(name.substr(-1)) + 1}`].current?.focus();
      }
    }
    setValues({ ...values, [name]: value });
  };

  const handleBankClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = event.target as HTMLDivElement;
    setValues({ ...values, 'card-bank': dataset.name! });
    refs['card-number__3'].current?.focus();
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

  const handleDiscedFocus = () => {
    setModalContent('VirtualKeyboard');
    setIsModalDisplayed(true);
  };

  const isPositiveIntWithLen = (len: number, ...arr: string[]): boolean => {
    const isPositiveInt: RegExp = new RegExp(`^[0-9]{${len}}$`);
    return (
      arr.every((str: string) => (isPositiveInt.test(str)))
    );
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isPositiveIntWithLen(4, values['card-number__1'], values['card-number__2'],
      values['card-number__3'], values['card-number__4'])) {
      // TODO: 에러 UI 표시
      return;
    } if (!isPositiveIntWithLen(3, values['card-cvc'])) {
      // TODO: 에러 UI 표시
      return;
    } if (!isPositiveIntWithLen(2, values['card-expiration'].substr(0, 2), values['card-expiration'].substr(3))) {
      // TODO: 에러 UI 표시
      return;
    } if (!isPositiveIntWithLen(1, values['card-password__1'], values['card-password__2'])) {
      // TODO: 에러 UI 표시
      // eslint-disable-next-line no-useless-return
      return;
    }
    // TODO: 제출 처리
  };

  const renderCardNumbers = () => {
    const disced3 = String().padEnd(values['card-number__3'].length, '*');
    const disced4 = String().padEnd(values['card-number__4'].length, '*');
    return `${values['card-number__1']} ${values['card-number__2']} ${disced3} ${disced4}`;
  };

  return (
    <StyledForm className={className}>
      <Modal
        className="card-register__modal"
        display={isModalDisplayed}
        // eslint-disable-next-line no-unused-expressions
        onBackgroundClick={() => { modalContent === 'BankSelector' ? null : setIsModalDisplayed(false); }}
        // TODO: 이벤트리스너 설정
      >
        {(modalContent === 'BankSelector'
          ? (<BankSelector className="card-register__bank-selector" onClick={handleBankClick} />)
          : ('Virtual Keyboard'))}
      </Modal>
      <Card
        className="card-register__card-preview"
        numbers={renderCardNumbers()}
        owner={values['card-owner']}
        bankName={values['card-bank']}
        expiration={values['card-expiration']}
      />
      <CardRegisterNumberInputs
        classNames={{
          container: 'card-register__input-container--card-number',
          input: 'card-register__input--card-number',
          span: 'card-register__span--card-number',
        }}
        label="카드 번호"
        values={values}
        refs={refs}
        onChange={handleCardNumberChange}
        onFocus={handleDiscedFocus}
      />
      <InlineBlockDiv>
        <label htmlFor="card-expiration">카드 유효기간</label>
        <InputContainer className="card-register__input-container--card-expiration">
          <Input
            className="card-register__input--card-expiration"
            name="card-expiration"
            value={values['card-expiration']}
            onChange={handleExpirationChange}
            placeholder="MM/YY"
            ref={refs['card-expiration']}
            required
          />
        </InputContainer>
      </InlineBlockDiv>
      <InlineBlockDiv>
        <label htmlFor="card-cvc">뒷면 보안코드 3자리</label>
        <InputContainer className="card-register__input-container--card-cvc">
          <Input
            className="card-register__input--card-cvc"
            type="number"
            name="card-cvc"
            value={values['card-cvc']}
            placeholder="CVC"
            onChange={handleCVCChange}
            onFocus={handleDiscedFocus}
            ref={refs['card-cvc']}
            required
          />
        </InputContainer>
      </InlineBlockDiv>
      <br />
      <label htmlFor="card-owner">카드 소유자 이름</label>
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
            onFocus={handleDiscedFocus}
            ref={refs['card-password__1']}
            required
          />
        </InputContainer>
        <InputContainer className="card-register__input-container--card-password" key="card-password__2">
          <Input
            className="card-register__input--card-password"
            type="number"
            name="card-password__2"
            value={values['card-password__2']}
            onChange={handlePasswordChange}
            onFocus={handleDiscedFocus}
            ref={refs['card-password__2']}
            required
          />
        </InputContainer>
        * *
      </label>
      <CardRegisterButtons
        classNames={{
          submit: 'card-register__button--submit',
          cancel: 'card-register__button--cancel',
        }}
        refs={refs}
        onSubmit={handleSubmit}
        onCancel={() => {}}
      />
    </StyledForm>
  );
};

CardRegisterForm.defaultProps = {
  className: '',
};

export default CardRegisterForm;
