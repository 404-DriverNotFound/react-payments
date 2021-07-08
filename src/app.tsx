import React, { useState } from 'react';
import { View } from '@constant/constant';
import CardList from '@components/CardList/cardList';
import CardAddForm from '@components/CardAddForm/cardAddForm';
import Card from '@typesCards/types.cards';
import './app.css';

const App = () => {
  const [currentView, setCurrentView] = useState<View>(View.List);
  const [cardList, setCardList] = useState<Card[]>([
    {
      cardBrand: 'blue-card',
      cardNumber: ['1234', '1234', '1234', '1234'],
      expDate: '0123',
      publisher: 'person A',
      cvc: '123',
      password: '1234',
      nickname: '파랑이 좋겠어',
    },
    {
      cardBrand: 'red-card',
      cardNumber: ['3456', '3456', '3456', '3456'],
      expDate: '1223',
      publisher: 'person A',
      cvc: '123',
      password: '1234',
      nickname: '빨강이 좋겠어',
    },
  ]);

  return (
    <>
      {currentView === View.List && (
        <CardList cardList={cardList} onClick={setCurrentView} />
      )}
      {currentView === View.Add && (
        <CardAddForm
          cardList={cardList}
          setCurrentView={setCurrentView}
          setCardList={setCardList}
        />
      )}
    </>
  );
};

export default App;
