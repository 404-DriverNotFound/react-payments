import React from 'react';
import Input from '@components/share/Input/input';
import Label from '@components/share/Label/label';

interface CardNumberFormProps {
  firstNumbers: string;
  secondNumbers: string;
  thirdNumbers: string;
  fourthNumbers: string;
  setFirstNumbers: (value: string) => void;
  setSecondNumbers: (value: string) => void;
  setThirdNumbers: (value: string) => void;
  setFourthNumbers: (value: string) => void;
  firstNumberInput: React.RefObject<HTMLInputElement>;
  secondNumberInput: React.RefObject<HTMLInputElement>;
  thirdNumberInput: React.RefObject<HTMLInputElement>;
  fourthNumberInput: React.RefObject<HTMLInputElement>;
  expireDateInput: React.RefObject<HTMLInputElement>;
}

const CardNumberForm = ({
                          firstNumbers,
                          secondNumbers,
                          fourthNumbers,
                          setFirstNumbers,
                          setFourthNumbers,
                          setSecondNumbers,
                          setThirdNumbers,
                          thirdNumbers,
                          firstNumberInput,
                          secondNumberInput,
                          thirdNumberInput,
                          fourthNumberInput,
                          expireDateInput,
                        }: CardNumberFormProps) => {
  const handleFirstChange = ({ target }: { target: HTMLInputElement }) => {
    setFirstNumbers(target?.value);
    target?.value.length === 4 && secondNumberInput.current?.focus();
  };
  const handleSecondChange = ({ target }: { target: HTMLInputElement }) => {
    firstNumbers.length === 4 && setSecondNumbers(target?.value);
    target?.value.length === 4 && thirdNumberInput.current?.focus();
  };
  const handleThirdChange = ({ target }: { target: HTMLInputElement }) => {
    secondNumbers.length === 4 && setThirdNumbers(target?.value);
    target?.value.length === 4 && fourthNumberInput.current?.focus();
  };
  const handleFourthChange = ({ target }: { target: HTMLInputElement }) => {
    thirdNumbers.length === 4 && setFourthNumbers(target?.value);
    target?.value.length === 4 && expireDateInput.current?.focus();
  };

  return (
    <>
      <Label value={'카드번호'}>
        <Input
          autoFocus
          ref={firstNumberInput}
          purpose={'input-number'}
          maxLength={'4'}
          size={'4'}
          value={firstNumbers}
          onChange={handleFirstChange}
        />
        <span>-</span>
        <Input
          ref={secondNumberInput}
          purpose={'input-number'}
          maxLength={'4'}
          size={'4'}
          value={secondNumbers}
          onChange={handleSecondChange}
        />
        <span>-</span>
        <Input
          ref={thirdNumberInput}
          purpose={'input-number input-secret'}
          maxLength={'4'}
          size={'4'}
          value={thirdNumbers}
          onChange={handleThirdChange}
        />
        <span>-</span>
        <Input
          ref={fourthNumberInput}
          purpose={'input-number input-secret'}
          maxLength={'4'}
          size={'4'}
          value={fourthNumbers}
          onChange={handleFourthChange}
        />
      </Label>
    </>
  );
};

export default CardNumberForm;