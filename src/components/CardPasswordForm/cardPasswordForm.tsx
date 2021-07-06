import React from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';

interface CardPasswordFormProps {
  password: string;
  setPassword: (value: string) => void;
  passwordInput: React.RefObject<HTMLInputElement>;
}

const CardPasswordForm = ({ password, setPassword, passwordInput }: CardPasswordFormProps) => {
  const handlePasswordChange = ({ target }: { target: HTMLInputElement }) => {
    // TODO password 검증
    setPassword(target?.value);
  };

  return (
    <>
      <Label value={'카드 비밀번호'}>
        <Input
          ref={passwordInput}
          purpose={'input-number input-secret'}
          maxLength={'4'}
          size={'4'}
          value={password}
          onChange={handlePasswordChange}
        />
      </Label>
    </>
  );
};

export default CardPasswordForm;