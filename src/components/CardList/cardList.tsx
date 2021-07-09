import React from 'react';
import Add from '@components/share/Add/add';
import CardTemplate from '@components/CardTemplate/cardTemplate';
import './cardList.css';
import Card from '@typesCards/types.cards';
import FlexCenter from '@components/share/FlexCenter/flexCenter';

interface CardListProps {
  cardList: Card[];
  onClick: (value: number) => void;
}

const CardList = ({ cardList, onClick }: CardListProps) => {
  const cards = cardList.map((card, index) => {
    return (
      <li key={index}>
        <CardTemplate
          brandName={card.cardBrand!}
          firstNumbers={card.cardNumber[0]}
          secondNumbers={card.cardNumber[1]}
          thirdNumbers={card.cardNumber[2]}
          fourthNumbers={card.cardNumber[3]}
          expireDate={card.expDate}
          publisher={card.publisher}
        />
        <FlexCenter>{card.nickname && <p>{card.nickname}</p>}</FlexCenter>
      </li>
    );
  });
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
