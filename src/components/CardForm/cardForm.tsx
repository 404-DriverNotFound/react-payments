import React, { useRef } from 'react';
import CardNumberForm from '@components/CardNumberForm/cardNumberForm';
import CardExpireDateForm from '@components/CardExpireDateForm/cardExpireDateForm';
import CardPublishForm from '@components/CardPublishForm/cardPublishForm';
import CardCvcForm from '@components/CardCVCForm/cardCVCForm';
import CardPasswordForm from '@components/CardPasswordForm/cardPasswordForm';
import Button from '@components/share/Button/button';

interface CardFormProps {
  setBrandName: (value: string) => void;
  firstNumbers: string;
  secondNumbers: string;
  thirdNumbers: string;
  fourthNumbers: string;
  setFirstNumbers: (value: string) => void;
  setSecondNumbers: (value: string) => void;
  setThirdNumbers: (value: string) => void;
  setFourthNumbers: (value: string) => void;
  expireDate: string;
  setExpireDate: (value: string) => void;
  publisher: string;
  setPublisher: (value: string) => void;
  cvc: string;
  setCVC: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  setIsComplete: (value: boolean) => void;
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
}: CardFormProps) => {
  const firstNumberInput = useRef<HTMLInputElement>(null);
  const secondNumberInput = useRef<HTMLInputElement>(null);
  const thirdNumberInput = useRef<HTMLInputElement>(null);
  const fourthNumberInput = useRef<HTMLInputElement>(null);
  const expireDateInput = useRef<HTMLInputElement>(null);
  const publisherInput = useRef<HTMLInputElement>(null);
  const cvcInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

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
