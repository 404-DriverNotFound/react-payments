import React, { useRef } from 'react';
import CardNumberForm from '@components/CardNumberForm/cardNumberForm';
import CardExpireDateForm from '@components/CardExpireDateForm/cardExpireDateForm';
import CardPublishForm from '@components/CardPublishForm/cardPublishForm';
import CardCvcForm from '@components/CardCVCForm/cardCVCForm';
import CardPasswordForm from '@components/CardPasswordForm/cardPasswordForm';

interface CardFormProps {
  firstNumbers: string;
  secondNumbers: string;
  thirdNumbers: string
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
}

const CardForm = ({
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
                  }: CardFormProps) => {
  const firstNumberInput = useRef<HTMLInputElement>(null);
  const secondNumberInput = useRef<HTMLInputElement>(null);
  const thirdNumberInput = useRef<HTMLInputElement>(null);
  const fourthNumberInput = useRef<HTMLInputElement>(null);
  const expireDateInput = useRef<HTMLInputElement>(null);
  const publisherInput = useRef<HTMLInputElement>(null);
  const cvcInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <CardNumberForm
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
      />
      <CardPasswordForm
        password={password}
        setPassword={setPassword}
        passwordInput={passwordInput}
      />
    </>
  );
};

export default CardForm;