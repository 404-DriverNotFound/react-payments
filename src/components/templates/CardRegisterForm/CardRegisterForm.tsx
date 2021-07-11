/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { bankTypes } from '../../../constants/cardBanks';
import Input from '../../atoms/Input/Input';
import Card from '../../molecules/Card/Card';
import Modal from '../../molecules/Modal/Modal';
import BankSelector from '../../organisms/CardRegisterForm/BankSelector/BankSelector';
import InputContainer from '../../molecules/InputContainer/InputContainer';
import CardRegisterNumberInputs from '../../organisms/CardRegisterForm/RegisterNumberInputs/RegisterNumberInputs';
import CardRegisterButtons from '../../organisms/CardRegisterForm/RegisterButtons/RegisterButtons';
import VirtualKeyboard from '../../organisms/VirtualKeyboard/VirtualKeyboard';
import { FORM_KEY } from '../../../constants/keys';

const StyledForm = styled.form`
  float: center;
  min-width: 16rem;
  max-width: 30rem;
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

export type valueObjType = {
  [key: string]: string,
};

const CardRegisterForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactElement>();
  const [values, setValues] = useState<valueObjType>({
    [FORM_KEY.CARD_BANK]: '',
    [FORM_KEY.CARD_NUMBER]: '',
    [FORM_KEY.CARD_NUMBER_FIRST]: '',
    [FORM_KEY.CARD_NUMBER_SECOND]: '',
    [FORM_KEY.CARD_NUMBER_THIRD]: '',
    [FORM_KEY.CARD_NUMBER_FOURTH]: '',
    [FORM_KEY.CARD_EXPIRATION]: '',
    [FORM_KEY.CARD_CVC]: '',
    [FORM_KEY.CARD_OWNER]: '',
    [FORM_KEY.CARD_PASSWORD_FIRST]: '',
    [FORM_KEY.CARD_PASSWORD_SECOND]: '',
  });

  type refObjType = {
    [key: string]: React.RefObject<any>;
  };

  const refs: refObjType = {
    [FORM_KEY.CARD_NUMBER_FIRST]: useRef<HTMLInputElement>(null),
    [FORM_KEY.CARD_NUMBER_SECOND]: useRef<HTMLInputElement>(null),
    [FORM_KEY.CARD_NUMBER_THIRD]: useRef<HTMLInputElement>(null),
    [FORM_KEY.CARD_NUMBER_FOURTH]: useRef<HTMLInputElement>(null),
    [FORM_KEY.CARD_EXPIRATION]: useRef<HTMLInputElement>(null),
    [FORM_KEY.CARD_CVC]: useRef<HTMLInputElement>(null),
    [FORM_KEY.CARD_OWNER]: useRef<HTMLInputElement>(null),
    [FORM_KEY.CARD_PASSWORD_FIRST]: useRef<HTMLInputElement>(null),
    [FORM_KEY.CARD_PASSWORD_SECOND]: useRef<HTMLInputElement>(null),
    [FORM_KEY.SUBMIT_BUTTON]: useRef<HTMLButtonElement>(null),
  };

  const renderCardNumbers = () => {
    const disced3 = String().padEnd(values[FORM_KEY.CARD_NUMBER_THIRD].length, '*');
    const disced4 = String().padEnd(values[FORM_KEY.CARD_NUMBER_FOURTH].length, '*');
    return `${values[FORM_KEY.CARD_NUMBER_FIRST]} ${values[FORM_KEY.CARD_NUMBER_SECOND]} ${disced3} ${disced4}`;
  };

  useEffect(() => {
    if (values[FORM_KEY.CARD_NUMBER_SECOND].length === 4) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      setModalContent(renderBankSelector());
      setIsModalDisplayed(true);
    }
  }, [values[FORM_KEY.CARD_NUMBER_SECOND]]);

  useEffect(() => {
    if (values[FORM_KEY.CARD_BANK]) {
      if (values[FORM_KEY.CARD_NUMBER_THIRD].length === 4) {
        return;
      }
      refs[FORM_KEY.CARD_NUMBER_THIRD].current?.focus();
    }
  }, [values[FORM_KEY.CARD_BANK]]);

  useEffect(() => {
    if (!values[FORM_KEY.CARD_NUMBER_THIRD]) {
      return;
    } if (values[FORM_KEY.CARD_NUMBER_THIRD].length === 4) {
      setIsModalDisplayed(true);
      refs[FORM_KEY.CARD_NUMBER_FOURTH].current?.focus();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setModalContent(renderKeyboard(FORM_KEY.CARD_NUMBER_THIRD));
  }, [values[FORM_KEY.CARD_NUMBER_THIRD]]);

  useEffect(() => {
    if (!values[FORM_KEY.CARD_NUMBER_FOURTH]) {
      return;
    } if (values[FORM_KEY.CARD_NUMBER_FOURTH].length === 4) {
      setIsModalDisplayed(false);
      refs[FORM_KEY.CARD_EXPIRATION].current?.focus();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setModalContent(renderKeyboard(FORM_KEY.CARD_NUMBER_FOURTH));
  }, [values[FORM_KEY.CARD_NUMBER_FOURTH]]);

  useEffect(() => {
    if (values[FORM_KEY.CARD_EXPIRATION].length === 5) {
      refs[FORM_KEY.CARD_CVC].current?.focus();
    }
  }, [values[FORM_KEY.CARD_EXPIRATION]]);

  useEffect(() => {
    if (!values[FORM_KEY.CARD_CVC]) {
      return;
    } if (values[FORM_KEY.CARD_CVC].length === 3) {
      setIsModalDisplayed(false);
      refs[FORM_KEY.CARD_OWNER].current?.focus();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setModalContent(renderKeyboard(FORM_KEY.CARD_CVC));
  }, [values[FORM_KEY.CARD_CVC]]);

  useEffect(() => {
    if (!values[FORM_KEY.CARD_PASSWORD_FIRST]) {
      return;
    } if (values[FORM_KEY.CARD_PASSWORD_FIRST].length === 1) {
      setIsModalDisplayed(false);
      refs[FORM_KEY.CARD_PASSWORD_SECOND].current?.focus();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setModalContent(renderKeyboard(FORM_KEY.CARD_PASSWORD_FIRST));
  }, [values[FORM_KEY.CARD_PASSWORD_FIRST]]);

  useEffect(() => {
    if (!values[FORM_KEY.CARD_PASSWORD_SECOND]) {
      return;
    } if (values[FORM_KEY.CARD_PASSWORD_SECOND].length === 1) {
      setIsModalDisplayed(false);
      refs[FORM_KEY.SUBMIT_BUTTON].current?.focus();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setModalContent(renderKeyboard(FORM_KEY.CARD_PASSWORD_SECOND));
  }, [values[FORM_KEY.CARD_PASSWORD_SECOND]]);

  const handleVirtualKeyboardClick = (event: React.MouseEvent, target: string) => {
    const { dataset } = event.target as HTMLDivElement;
    if (values[target].length === 4) {
      return;
    }
    setValues({ ...values, [target]: `${values[target]}${dataset.content}` });
  };

  function renderKeyboard(target: string) {
    return (
      <VirtualKeyboard
        className="card-register__keyboard"
        onClick={(e) => handleVirtualKeyboardClick(e, target)}
      />
    );
  }

  const handleBankClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = event.target as HTMLDivElement;
    setValues({ ...values, [FORM_KEY.CARD_BANK]: dataset.name! });
    setIsModalDisplayed(false);
  };

  const renderBankSelector = () => {
    return (
      <BankSelector
        className="card-register__bank-selector"
        onClick={handleBankClick}
      />
    );
  };

  const handleCardNumberChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (value.length > 4) {
      return;
    } if (value.length === 4 && name === FORM_KEY.CARD_NUMBER_FIRST) {
      refs[FORM_KEY.CARD_NUMBER_SECOND].current?.focus();
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
    }
    setValues({ ...values, [name]: value });
  };

  const handleCVCChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (value.length > 3) {
      return;
    }
    setValues({ ...values, [name]: value });
  };

  const handleOwnerNameChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (value.length > 26) {
      return;
    }
    setValues({ ...values, [name]: value });
  };

  const handlePasswordChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (value.length > 1) {
      return;
    }
    setValues({ ...values, [name]: value });
  };

  const handleDiscedFocus = (target: string) => {
    setModalContent(renderKeyboard(target));
    setIsModalDisplayed(true);
  };

  const handleNonDiscedFocus = () => {
    setIsModalDisplayed(false);
  };

  const isPositiveIntWithLen = (len: number, ...arr: string[]): boolean => {
    const isPositiveInt: RegExp = new RegExp(`^[0-9]{${len}}$`);
    return (
      arr.every((str: string) => (isPositiveInt.test(str)))
    );
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isPositiveIntWithLen(4, values[FORM_KEY.CARD_NUMBER_FIRST],
      values[FORM_KEY.CARD_NUMBER_THIRD], values[FORM_KEY.CARD_NUMBER_FOURTH])) {
      // TODO: 에러 UI 표시
      return;
    } if (!isPositiveIntWithLen(3, values[FORM_KEY.CARD_CVC])) {
      // TODO: 에러 UI 표시
      return;
    } if (!isPositiveIntWithLen(2, values[FORM_KEY.CARD_EXPIRATION].substr(0, 2),
      values[FORM_KEY.CARD_EXPIRATION].substr(3))) {
      // TODO: 에러 UI 표시
      return;
    } if (!isPositiveIntWithLen(1, values[FORM_KEY.CARD_PASSWORD_FIRST],
      values[FORM_KEY.CARD_PASSWORD_SECOND])) {
      // TODO: 에러 UI 표시
      // eslint-disable-next-line no-useless-return
      return;
    }
    // TODO: 제출 처리
  };

  return (
    <StyledForm>
      <Modal
        display={isModalDisplayed}
        // eslint-disable-next-line no-unused-expressions
        onClick={() => { setIsModalDisplayed(false); }}
      >
        {modalContent}
      </Modal>
      <Card
        numbers={renderCardNumbers()}
        owner={values[FORM_KEY.CARD_OWNER]}
        bankName={values[FORM_KEY.CARD_BANK] as bankTypes}
        expiration={values[FORM_KEY.CARD_EXPIRATION]}
      />
      <CardRegisterNumberInputs
        label="카드 번호"
        values={values}
        refs={refs}
        onChange={handleCardNumberChange}
        onFocus={(target: string) => { handleDiscedFocus(target); }}
      />
      <InlineBlockDiv>
        <label htmlFor="card-expiration">카드 유효기간</label>
        <InputContainer styledType={FORM_KEY.CARD_EXPIRATION}>
          <Input
            name={FORM_KEY.CARD_EXPIRATION}
            value={values[FORM_KEY.CARD_EXPIRATION]}
            styledType={FORM_KEY.CARD_EXPIRATION}
            onChange={handleExpirationChange}
            onFocus={handleNonDiscedFocus}
            placeholder="MM/YY"
            ref={refs[FORM_KEY.CARD_EXPIRATION]}
            required
          />
        </InputContainer>
      </InlineBlockDiv>
      <InlineBlockDiv>
        <label htmlFor="card-cvc">뒷면 보안코드 3자리</label>
        <InputContainer styledType={FORM_KEY.CARD_CVC}>
          <Input
            type="number"
            styledType={FORM_KEY.CARD_CVC}
            name={FORM_KEY.CARD_CVC}
            value={values[FORM_KEY.CARD_CVC]}
            placeholder="CVC"
            onChange={handleCVCChange}
            onFocus={() => { handleDiscedFocus(FORM_KEY.CARD_CVC); }}
            ref={refs[FORM_KEY.CARD_CVC]}
            required
          />
        </InputContainer>
      </InlineBlockDiv>
      <br />
      <label htmlFor="card-owner">카드 소유자 이름</label>
      <InputContainer styledType={FORM_KEY.CARD_OWNER}>
        <Input
          type="text"
          styledType={FORM_KEY.CARD_OWNER}
          name={FORM_KEY.CARD_OWNER}
          value={values[FORM_KEY.CARD_OWNER]}
          onChange={handleOwnerNameChange}
          onFocus={handleNonDiscedFocus}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요"
          ref={refs[FORM_KEY.CARD_OWNER]}
          required
        />
      </InputContainer>
      <label>
        비밀번호 앞 2자리
        <br />
        <InputContainer styledType={FORM_KEY.CARD_PASSWORD}>
          <Input
            type="password"
            styledType={FORM_KEY.CARD_PASSWORD}
            name={FORM_KEY.CARD_PASSWORD_FIRST}
            value={values[FORM_KEY.CARD_PASSWORD_FIRST]}
            onChange={handlePasswordChange}
            onFocus={() => { handleDiscedFocus(FORM_KEY.CARD_PASSWORD_FIRST); }}
            ref={refs[FORM_KEY.CARD_PASSWORD_FIRST]}
            required
          />
        </InputContainer>
        <InputContainer styledType={FORM_KEY.CARD_PASSWORD}>
          <Input
            type="number"
            styledType={FORM_KEY.CARD_PASSWORD}
            name={FORM_KEY.CARD_PASSWORD_SECOND}
            value={values[FORM_KEY.CARD_PASSWORD_SECOND]}
            onChange={handlePasswordChange}
            onFocus={() => { handleDiscedFocus(FORM_KEY.CARD_PASSWORD_SECOND); }}
            ref={refs[FORM_KEY.CARD_PASSWORD_SECOND]}
            required
          />
        </InputContainer>
        * *
      </label>
      <CardRegisterButtons
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
