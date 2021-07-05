import React, { useState } from 'react';
import View from '@constant/constant';
import CardList from '@components/CardList/cardList';
import CardAddForm from '@components/CardAddForm/cardAddForm';

const App = () => {
  const [currentView, setCurrentView] = useState(View.List);
  const cardList = [1,2,3,4,5];
  return (
    <>
      {currentView === View.List && <CardList cardList={cardList} onClick={setCurrentView}/>}
      {currentView === View.Add && <CardAddForm />}
    </>
  );
};

export default App;