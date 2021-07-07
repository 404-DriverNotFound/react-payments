import React from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';
import { THIS_YEAR } from '@constant/constant';

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
  const isValidDate = (date: string) => {
    const month = Number(date.slice(0, 2));
    const year = Number(date.slice(2));
    return !(month < 1 || month > 12 || year < THIS_YEAR || year > THIS_YEAR + 5);
  };
  const handleExpireDateChange = ({ target }: { target: HTMLInputElement }) => {
    target?.value.length === 4 && isValidDate(target?.value) && publisherInput.current?.focus();
    setExpireDate(target?.value);
  };

  return (
    <>
      <Label value={'만료일'}>
        <div>
          <Input
            ref={expireDateInput}
            purpose={'input-number'}
            maxLength={'4'}
            size={'4'}
            placeholder={'MM / YY'}
            value={expireDate}
            onChange={handleExpireDateChange}
          />
        </div>
      </Label>
    </>
  );
};

export default CardExpireDateForm;