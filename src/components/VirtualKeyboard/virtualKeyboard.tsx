import React, { SetStateAction } from 'react';
import './virtualKeyboard.css';

interface VirtualKeyboardProps {
  position: string;
  keyboard: number[];
  state: string;
  changeState: React.Dispatch<SetStateAction<string>>;
  maxCount: number;
  nextRef?: React.RefObject<HTMLInputElement>;
  clearCurrentKeyboard: React.Dispatch<SetStateAction<boolean>>;
  popUpNextKeyboard?: React.Dispatch<SetStateAction<boolean>>;
}

const VirtualKeyboard = ({
  position,
  keyboard,
  state,
  changeState,
  maxCount,
  nextRef,
  clearCurrentKeyboard,
  popUpNextKeyboard,
}: VirtualKeyboardProps) => {
  const addValueToRef = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    changeState((prevState) => prevState + target.textContent!);
    if (state.length + 1 === maxCount) {
      if (nextRef && nextRef.current && nextRef.current.value.length === 0) {
        nextRef?.current?.focus();
        popUpNextKeyboard && popUpNextKeyboard((prevState) => !prevState);
      }
      clearCurrentKeyboard((prevState) => !prevState);
    }
  };

  return (
    <>
      <div
        className={`virtual-keyboard-container ${
          position === 'absolute' ? 'container-absolute' : ''
        }`}
      >
        <div
          className={`virtual-keyboard-modal ${
            position === 'absolute' ? 'keyboard-absolute' : ''
          }`}
        >
          {keyboard.map((key) => {
            if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(key)) {
              return (
                <div
                  className={'keyboard-item'}
                  key={key}
                  onClick={addValueToRef}
                >
                  {key}
                </div>
              );
            }
            return <div key={key} />;
          })}
        </div>
      </div>
    </>
  );
};

export default VirtualKeyboard;
