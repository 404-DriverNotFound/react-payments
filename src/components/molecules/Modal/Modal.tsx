/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const ModalBackground = styled.div<{ display: string }>`
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

const StyledModal = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
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

const ModalContent = styled.div`
  padding: 1em 2em;
`;

export type ModalProps = {
  display?: boolean,
  children?: React.ReactNode,
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent) => void,
};

const Modal = ({ display, children, onClick }: ModalProps) => {
  return (
    <>
      <ModalBackground display={display ? '' : 'none'} onClick={onClick} />
      <StyledModal display={display ? '' : 'none'}>
        <ModalContent>
          {children}
        </ModalContent>
      </StyledModal>
    </>
  );
};

Modal.defaultProps = {
  display: false,
  children: null,
  onClick: () => {},
};

export default Modal;
