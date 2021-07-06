import React from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';

interface CardExpireDateFormProps {
  expireDate: string;
  setExpireDate: (value: string) => void;
  expireDateInput: React.RefObject<HTMLInputElement>;
  publisherInput: React.RefObject<HTMLInputElement>;
}

const CardExpireDateForm = ({
                              expireDate,
                              setExpireDate,
                              expireDateInput,
                              publisherInput,
                            }: CardExpireDateFormProps) => {
  const handleExpireDateChange = ({ target }: { target: HTMLInputElement }) => {
    // TODO date가 정상적인지 판별하기
    target?.value.length === 4 && publisherInput.current?.focus();
    setExpireDate(target?.value);
  };
  return (
    <>
      <Label value={'만료일'}>
        <Input
          ref={expireDateInput}
          purpose={'input-number'}
          maxLength={'4'}
          size={'4'}
          placeholder={'MM / YY'}
          value={expireDate}
          onChange={handleExpireDateChange}
        />
      </Label>
    </>
  );
};

export default CardExpireDateForm;