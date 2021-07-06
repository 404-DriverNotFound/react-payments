import React from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';

interface CardCVCFormProps {
  cvc: string;
  setCVC: (value: string) => void;
  cvcInput: React.RefObject<HTMLInputElement>;
}

const CardCvcForm = ({ cvc, setCVC, cvcInput }: CardCVCFormProps) => {
  const handleCVCChange = ({ target }: { target: HTMLInputElement }) => {
    // TODO CVC / CVV 판별
    setCVC(target?.value);
  }
  return (
    <>
      <Label value={'보안 코드 (CVC / CVV)'}>
        <Input
          ref={cvcInput}
          value={cvc}
          onChange={handleCVCChange}
        />
      </Label>
    </>
  );
};

export default CardCvcForm;