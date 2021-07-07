import React from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';

interface CardPublisherFormProps {
  publisher: string;
  setPublisher: (value: string) => void;
  publisherInput: React.RefObject<HTMLInputElement>;
}

const CardPublishForm = ({ publisher, setPublisher, publisherInput }: CardPublisherFormProps) => {
  const handlePublisherChange = ({ target }: { target: HTMLInputElement }) => {

    setPublisher(target?.value);
  };
  
  return (
    <>
      <Label value={'카드 소유자 이름'}>
        <Input
          ref={publisherInput}
          maxLength={'30'}
          size={'30'}
          placeholder={'카드에 표시된 이름과 동일하게 입력하세요'}
          value={publisher}
          onChange={handlePublisherChange}
        />
      </Label>
    </>
  );
};

export default CardPublishForm;