import React, { SetStateAction, useState } from 'react';
import Input from '@components/share/Input/input';
import Label from '@components/share/Label/label';
import { ABSOLUTE, NORMAL } from '@constant/constant';
import VirtualKeyboard from '@components/VirtualKeyboard/virtualKeyboard';

interface CardNumberFormProps {
  setBrandName: (value: string) => void;
  keyboard: number[];
  firstNumbers: string;
  secondNumbers: string;
  thirdNumbers: string;
  fourthNumbers: string;
  setFirstNumbers: React.Dispatch<SetStateAction<string>>;
  setSecondNumbers: React.Dispatch<SetStateAction<string>>;
  setThirdNumbers: React.Dispatch<SetStateAction<string>>;
  setFourthNumbers: React.Dispatch<SetStateAction<string>>;
  firstNumberInput: React.RefObject<HTMLInputElement>;
  secondNumberInput: React.RefObject<HTMLInputElement>;
  thirdNumberInput: React.RefObject<HTMLInputElement>;
  fourthNumberInput: React.RefObject<HTMLInputElement>;
  expireDateInput: React.RefObject<HTMLInputElement>;
}

const CardNumberForm = ({
  setBrandName,
  keyboard,
  firstNumbers,
  secondNumbers,
  fourthNumbers,
  setFirstNumbers,
  setSecondNumbers,
  setThirdNumbers,
  setFourthNumbers,
  thirdNumbers,
  firstNumberInput,
  secondNumberInput,
  thirdNumberInput,
  fourthNumberInput,
  expireDateInput,
}: CardNumberFormProps) => {
  const [thirdNumberTurn, setThirdNumberTurn] = useState(false);
  const [fourthNumberTurn, setFourthNumberTurn] = useState(false);
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
    firstNumbers.length + 1 === 4 && secondNumberInput.current?.focus();
  };
  const handleSecondChange = ({ target }: { target: HTMLInputElement }) => {
    setSecondNumbers(target?.value);
    secondNumbers.length + 1 === 2 &&
      chooseCardBrand(firstNumbers + target?.value);
    if (secondNumbers.length + 1 === 4) {
      setThirdNumberTurn(true);
    }
  };

  const reInputNumber = ({ target }: { target: HTMLInputElement }) => {
    if (target === thirdNumberInput.current) {
      setThirdNumbers('');
      setThirdNumberTurn(true);
    }
    if (target === fourthNumberInput.current) {
      setFourthNumbers('');
      setFourthNumberTurn(true);
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
            defaultValue={thirdNumbers}
            onClick={reInputNumber}
          />
          <span>-</span>
          <Input
            ref={fourthNumberInput}
            purpose={'input-number input-secret'}
            maxLength={'4'}
            size={'4'}
            defaultValue={fourthNumbers}
            onClick={reInputNumber}
          />
        </div>
      </Label>
      {thirdNumberTurn && (
        <VirtualKeyboard
          position={'absolute'}
          keyboard={keyboard}
          state={thirdNumbers}
          maxCount={4}
          nextRef={fourthNumberInput}
          changeState={setThirdNumbers}
          clearCurrentKeyboard={setThirdNumberTurn}
          popUpNextKeyboard={setFourthNumberTurn}
        />
      )}
      {fourthNumberTurn && (
        <VirtualKeyboard
          position={'absolute'}
          keyboard={keyboard}
          state={fourthNumbers}
          changeState={setFourthNumbers}
          maxCount={4}
          nextRef={expireDateInput}
          clearCurrentKeyboard={setFourthNumberTurn}
        />
      )}
    </>
  );
};

export default CardNumberForm;
