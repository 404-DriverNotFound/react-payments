import React from 'react';
import Add from '@components/share/Add/add';
import Card from '@components/Card/card';
import './cardList.css';

interface CardListProps {
  cardList: number[],
  onClick: (value: number) => void;
}

const CardList = ({ cardList, onClick }: CardListProps) => {
  const cards = cardList.map((card, index) => <li key={index}><Card></Card></li>);
  return (
    <ul className={'cardList'}>
      {cards}
      <li key={'cardAddItem'}>
        <Add onClick={onClick} />
      </li>
    </ul>
  );
};

export default CardList;