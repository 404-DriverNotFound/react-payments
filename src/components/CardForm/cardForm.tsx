import React, { useState, useRef, SetStateAction } from 'react';
import CardNumberForm from '@components/CardNumberForm/cardNumberForm';
import CardExpireDateForm from '@components/CardExpireDateForm/cardExpireDateForm';
import CardPublishForm from '@components/CardPublishForm/cardPublishForm';
import CardCvcForm from '@components/CardCVCForm/cardCVCForm';
import CardPasswordForm from '@components/CardPasswordForm/cardPasswordForm';
import Button from '@components/share/Button/button';

interface CardFormProps {
  setBrandName: React.Dispatch<SetStateAction<string>>;
  firstNumbers: string;
  secondNumbers: string;
  thirdNumbers: string;
  fourthNumbers: string;
  setFirstNumbers: React.Dispatch<SetStateAction<string>>;
  setSecondNumbers: React.Dispatch<SetStateAction<string>>;
  setThirdNumbers: React.Dispatch<SetStateAction<string>>;
  setFourthNumbers: React.Dispatch<SetStateAction<string>>;
  expireDate: string;
  setExpireDate: React.Dispatch<SetStateAction<string>>;
  publisher: string;
  setPublisher: React.Dispatch<SetStateAction<string>>;
  cvc: string;
  setCVC: React.Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
  setIsComplete: React.Dispatch<SetStateAction<boolean>>;
  firstNumberInput: React.RefObject<HTMLInputElement>;
  secondNumberInput: React.RefObject<HTMLInputElement>;
  thirdNumberInput: React.RefObject<HTMLInputElement>;
  fourthNumberInput: React.RefObject<HTMLInputElement>;
  expireDateInput: React.RefObject<HTMLInputElement>;
  publisherInput: React.RefObject<HTMLInputElement>;
  cvcInput: React.RefObject<HTMLInputElement>;
  passwordInput: React.RefObject<HTMLInputElement>;
  keyboard: number[];
}

const CardForm = ({
  setBrandName,
  firstNumbers,
  secondNumbers,
  thirdNumbers,
  fourthNumbers,
  setFirstNumbers,
  setSecondNumbers,
  setThirdNumbers,
  setFourthNumbers,
  expireDate,
  setExpireDate,
  publisher,
  setPublisher,
  cvc,
  setCVC,
  password,
  setPassword,
  setIsComplete,
  firstNumberInput,
  secondNumberInput,
  thirdNumberInput,
  fourthNumberInput,
  expireDateInput,
  publisherInput,
  cvcInput,
  passwordInput,
  keyboard,
}: CardFormProps) => {
  const isFulfillInput = (
    ref: React.RefObject<HTMLInputElement>,
    count: number,
  ) => {
    if (
      ref?.current?.value.length === 0 ||
      ref?.current?.value.length !== count
    ) {
      ref?.current?.focus();
      return false;
    }
    return true;
  };

  const goToCardComplete = (event: Event) => {
    event.preventDefault();
    if (
      isFulfillInput(firstNumberInput, 4) &&
      isFulfillInput(secondNumberInput, 4) &&
      isFulfillInput(thirdNumberInput, 4) &&
      isFulfillInput(fourthNumberInput, 4) &&
      isFulfillInput(publisherInput, publisherInput?.current?.value.length!) &&
      isFulfillInput(expireDateInput, 4) &&
      isFulfillInput(cvcInput, 3) &&
      isFulfillInput(passwordInput, 4)
    ) {
      setIsComplete(true);
    }
  };

  return (
    <>
      <CardNumberForm
        setBrandName={setBrandName}
        keyboard={keyboard}
        firstNumbers={firstNumbers}
        secondNumbers={secondNumbers}
        thirdNumbers={thirdNumbers}
        fourthNumbers={fourthNumbers}
        setFirstNumbers={setFirstNumbers}
        setSecondNumbers={setSecondNumbers}
        setThirdNumbers={setThirdNumbers}
        setFourthNumbers={setFourthNumbers}
        firstNumberInput={firstNumberInput}
        secondNumberInput={secondNumberInput}
        thirdNumberInput={thirdNumberInput}
        fourthNumberInput={fourthNumberInput}
        expireDateInput={expireDateInput}
      />
      <CardExpireDateForm
        expireDate={expireDate}
        setExpireDate={setExpireDate}
        expireDateInput={expireDateInput}
        publisherInput={publisherInput}
      />
      <CardPublishForm
        publisher={publisher}
        setPublisher={setPublisher}
        publisherInput={publisherInput}
      />
      <CardCvcForm
        cvc={cvc}
        setCVC={setCVC}
        cvcInput={cvcInput}
        password={password}
        passwordInput={passwordInput}
      />
      <CardPasswordForm
        password={password}
        setPassword={setPassword}
        passwordInput={passwordInput}
      />
      <Button
        variant={'active'}
        value={'다음'}
        position={'bottom-right'}
        onClick={goToCardComplete}
      />
    </>
  );
};

export default CardForm;
