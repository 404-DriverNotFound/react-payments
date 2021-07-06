import React, { useRef } from 'react';
import Input from '@components/share/Input/input';
import Label from '@components/share/Label/label';

interface CardNumberFormProps {
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
  setFirstNumber: (value: string) => void;
  setSecondNumber: (value: string) => void;
  setThirdNumber: (value: string) => void;
  setFourthNumber: (value: string) => void;
}

const CardNumberForm = ({
                          firstNumber,
                          secondNumber,
                          fourthNumber,
                          setFirstNumber,
                          setFourthNumber,
                          setSecondNumber,
                          setThirdNumber,
                          thirdNumber,
                        }: CardNumberFormProps) => {

  const secondNumberInput = useRef<HTMLInputElement>(null);
  const thirdNumberInput = useRef<HTMLInputElement>(null);
  const fourthNumberInput = useRef<HTMLInputElement>(null);

  const handleFirstChange = ({ target } : { target: HTMLInputElement}) => {
    setFirstNumber(target?.value);
    target?.value.length === 4 && secondNumberInput.current?.focus();
  }
  const handleSecondChange = ({ target } : { target: HTMLInputElement}) => {
    firstNumber.length === 4 && setSecondNumber(target?.value);
    target?.value.length === 4 && thirdNumberInput.current?.focus();
  }
  const handleThirdChange = ({ target } : { target: HTMLInputElement}) => {
    secondNumber.length === 4 && setThirdNumber(target?.value);
    target?.value.length === 4 && fourthNumberInput.current?.focus();
  }
  const handleFourthChange = ({ target } : { target: HTMLInputElement}) => {
    thirdNumber.length === 4 && setFourthNumber(target?.value);
  }

  return (
    <>
      <Label value={'카드번호'}>
        <Input
          autoFocus
          purpose={'input-number'}
          maxLength={'4'}
          size={'4'}
          value={firstNumber}
          onChange={handleFirstChange}
        />
        <span>-</span>
        <Input
          ref={secondNumberInput}
          purpose={'input-number'}
          maxLength={'4'}
          size={'4'}
          value={secondNumber}
          onChange={handleSecondChange}
        />
        <span>-</span>
        <Input
          ref={thirdNumberInput}
          purpose={'input-number input-secret'}
          maxLength={'4'}
          size={'4'}
          value={thirdNumber}
          onChange={handleThirdChange}
        />
        <span>-</span>
        <Input
          ref={fourthNumberInput}
          purpose={'input-number input-secret'}
          maxLength={'4'}
          size={'4'}
          value={fourthNumber}
          onChange={handleFourthChange}
        />
      </Label>
    </>
  );
};

export default CardNumberForm;