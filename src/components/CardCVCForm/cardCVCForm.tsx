import React from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';

interface CardCVCFormProps {
  cvc: string;
  setCVC: (value: string) => void;
  cvcInput: React.RefObject<HTMLInputElement>;
  passwordInput: React.RefObject<HTMLInputElement>;
}

const CardCvcForm = ({ cvc, setCVC, cvcInput, passwordInput }: CardCVCFormProps) => {
  const handleCVCChange = ({ target }: { target: HTMLInputElement }) => {
    // TODO CVC / CVV 판별
    setCVC(target?.value);
    target?.value.length === 3 && passwordInput.current?.focus();
  }
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
          />
        </div>
      </Label>
    </>
  );
};

export default CardCvcForm;