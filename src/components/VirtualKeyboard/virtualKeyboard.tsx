import { getRandomNumbers } from '@utils/utils';
import React, { useCallback, useEffect } from 'react';
import './virtualKeyboard.css';

interface VirtualKeyboardProps {
  position: string;
  keyboard: number[];
}

const VirtualKeyboard = ({ position, keyboard }: VirtualKeyboardProps) => {
  const triggerKeypressFromClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const button = event.target as HTMLDivElement;
    console.log(button.textContent);
  }
  return (
    <>
      <div className={'virtual-keyboard-container'} />
      <div className={`virtual-keyboard-modal ${position}`}>
        {
          keyboard.map((key) => {
            if ([1,2,3,4,5,6,7,8,9].includes(key)) {
              return (
              <div
                className={'keyboard-item'}
                key={key}
                onClick={triggerKeypressFromClick}
              >
                {key}
              </div>);
            }
            return (<div key={key}></div>);
          })
        }
      </div>
    </>
  );
};

export default VirtualKeyboard;