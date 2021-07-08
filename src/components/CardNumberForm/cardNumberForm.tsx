import React, { useState } from 'react';
import Input from '@components/share/Input/input';
import Label from '@components/share/Label/label';
import VirtualKeyboard from '@components/VirtualKeyboard/virtualKeyboard';

interface CardNumberFormProps {
  setBrandName: (value: string) => void;
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
  setIsMaskingInput: (value: boolean) => void;
}

const CardNumberForm = ({
  setBrandName,
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
  setIsMaskingInput
}: CardNumberFormProps) => {

  const chooseCardBrand = (cardNumber: string) => {
    const brandNames: Record<string, string> = {
      '111111': 'blue-card',
      '222222': 'red-card',
      '333333': 'purple-card',
    };
    let brandName = 'default-card';
    if (brandNames.hasOwnProperty(cardNumber)) {
      brandName = brandNames[cardNumber];
    }
    setBrandName(brandName);
  };

  const handleFirstChange = ({ target }: { target: HTMLInputElement }) => {
    setFirstNumbers(target?.value);
    target?.value.length === 4 && secondNumberInput.current?.focus();
  };
  const handleSecondChange = ({ target }: { target: HTMLInputElement }) => {
    setSecondNumbers(target?.value);
    target?.value.length === 2 && chooseCardBrand(firstNumbers + target?.value);
    if (target?.value.length === 4) {
      setIsMaskingInput(true);
      thirdNumberInput.current?.focus();
    }
  };
  const handleThirdChange = ({ target }: { target: HTMLInputElement }) => {
    setThirdNumbers(target?.value);
    target?.value.length === 4 && fourthNumberInput.current?.focus();
  };
  const handleFourthChange = ({ target }: { target: HTMLInputElement }) => {
    setFourthNumbers(target?.value);
    // TODO 마지막 번호까지 입력되었는데 알 수 없는 카드 브랜드인 경우
    // 여기서 모달창을 띄워 브랜드를 선택한다.
    if (target?.value.length === 4) {
      setIsMaskingInput(false);
      expireDateInput.current?.focus();
    }
  };

  return (
    <>
      <Label value={'카드번호'}>
        <div>
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
        </div>
      </Label>
    </>
  );
};

export default CardNumberForm;
