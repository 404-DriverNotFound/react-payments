/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

import Button from '../../../atoms/Button/Button';

const StyledDiv = styled.div`
  width: fit-content;
  margin: 0 0 auto auto;
`;

type CardRegisterButtonsProps = {
  classNames: {
    'submit': string,
    'cancel': string,
  },
  refs: {
    [key: string]: React.RefObject<any>,
  },
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void,
  // eslint-disable-next-line no-unused-vars
  onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const CardRegisterButtons = ({
  classNames, refs, onSubmit, onCancel,
}: CardRegisterButtonsProps) => {
  return (
    <StyledDiv>
      <Button
        className={classNames.submit}
        color="blue"
        type="submit"
        onClick={onSubmit}
        ref={refs['submit-button']}
      >
        다음
      </Button>
      <Button
        className={classNames.cancel}
        onClick={onCancel}
      >
        취소
      </Button>
    </StyledDiv>
  );
};

export default CardRegisterButtons;
