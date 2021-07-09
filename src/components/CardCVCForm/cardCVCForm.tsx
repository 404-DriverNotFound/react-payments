import React, { SetStateAction } from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';
import { isDigit } from '@utils/utils';
import { NORMAL } from '@constant/constant';

interface CardCVCFormProps {
  cvc: string;
  setCVC: (value: string) => void;
  cvcInput: React.RefObject<HTMLInputElement>;
  password: string;
  passwordInput: React.RefObject<HTMLInputElement>;
}

const CardCvcForm = ({
  cvc,
  setCVC,
  cvcInput,
  password,
  passwordInput,
}: CardCVCFormProps) => {
  const handleCVCChange = ({ target }: { target: HTMLInputElement }) => {
    if (isDigit(Number(target.value))) {
      setCVC(target?.value);
    }
    if (target.value.length === 3 && password.length === 0) {
      passwordInput.current?.focus();
    }
  };
  const popUpMaskingInput = () => {
    setCVC('');
  };
  return (
    <>
      <Label value={'보안 코드 (CVC / CVV)'}>
        <div>
          <Input
            ref={cvcInput}
            purpose={'input-number input-secret'}
            maxLength={'3'}
            size={'3'}
            value={cvc}
            onChange={handleCVCChange}
            onClick={popUpMaskingInput}
          />
        </div>
      </Label>
    </>
  );
};

export default CardCvcForm;
