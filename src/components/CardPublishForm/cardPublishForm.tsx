import React from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';

interface CardPublisherFormProps {
  publisherInput: React.RefObject<HTMLInputElement>;
}

const CardPublishForm = ({ publisherInput }: CardPublisherFormProps) => {
  return (
    <>
      <Label value={'카드 소유자 이름'}>
        <Input
          ref={publisherInput}
          maxLength={'30'}
          size={'30'}
          placeholder={'카드에 표시된 이름과 동일하게 입력하세요'}/>
      </Label>
    </>
  );
};

export default CardPublishForm;