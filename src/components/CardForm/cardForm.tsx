import React, { useRef } from 'react';
import CardNumberForm from '@components/CardNumberForm/cardNumberForm';
import CardExpireDateForm from '@components/CardExpireDateForm/cardExpireDateForm';

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
                  }: CardFormProps) => {
  const secondNumberInput = useRef<HTMLInputElement>(null);
  const thirdNumberInput = useRef<HTMLInputElement>(null);
  const fourthNumberInput = useRef<HTMLInputElement>(null);
  const expireDateInput = useRef<HTMLInputElement>(null);
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
        secondNumberInput={secondNumberInput}
        thirdNumberInput={thirdNumberInput}
        fourthNumberInput={fourthNumberInput}
        expireDateInput={expireDateInput}
      />
      <CardExpireDateForm expireDate={expireDate} expireDateInput={expireDateInput}/>
    </>
  );
};

export default CardForm;