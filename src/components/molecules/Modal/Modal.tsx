/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  display: ${({ display }) => display};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 9998;

  animation: fadeIn 0.2s;
  -moz-animation: fadeIn 0.2s;
  -webkit-animation: fadeIn 0.2s;
  -o-animation: fadeIn 0.2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledModal = styled.div`
  display: ${({ display }) => display};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20rem;
  border-radius: 3em 3em 0 0;
  background-color: #fff;
  z-index: 9999;

  animation: rollUp 0.2s;
  -moz-animation: rollUp 0.2s;
  -webkit-animation: rollUp 0.2s;
  -o-animation: rollUp 0.2s;

  @keyframes rollUp {
    from {
      height: 0;
    }
    to { 
      height: 20rem;
    }
  }
`;

type ModalProps = {
  className: string,
  display: boolean,
  children?: React.ReactNode,
  // eslint-disable-next-line no-unused-vars
  onBackgroundClick: (event: React.MouseEvent<HTMLDivElement>) => void,
};

const Modal = ({
  className, display, children, onBackgroundClick,
}: ModalProps) => {
  return (
    <>
      <ModalBackground onClick={onBackgroundClick} display={display ? '' : 'none'} />
      <StyledModal className={className} display={display ? '' : 'none'}>
        {children}
      </StyledModal>
    </>
  );
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
