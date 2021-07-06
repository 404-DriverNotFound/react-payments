import React  from 'react';
import './cardContainer.css';

interface CardContainerProps {
  children: JSX.Element | JSX.Element[];
  type: string;
  onClick?: () => void;
  [x:string]: any;
}

const CardContainer = ({ children, type, onClick, ...rest }: CardContainerProps) => {
  return (
    <div className={`${type} card-container`} {...rest} onClick={onClick}>
      {children}
    </div>
  );
};

export default CardContainer;