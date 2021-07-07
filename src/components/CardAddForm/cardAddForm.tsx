import React, { Dispatch, SetStateAction, useState } from 'react';
import CardTemplate from '@components/CardTemplate/cardTemplate';
import CardForm from '@components/CardForm/cardForm';
import CardAddComplete from '@components/CardAddComplete/cardAddComplete';
import { View } from '@constant/constant';
import Card from '@typesCards/types.cards';

interface CardAddFormProps {
  cardList: Card[];
  setCurrentView: Dispatch<SetStateAction<View>>;
  setCardList: Dispatch<SetStateAction<Card[]>>;
}

const CardAddForm = ({
  cardList,
  setCurrentView,
  setCardList,
}: CardAddFormProps) => {
  const [brandName, setBrandName] = useState('purple-card');
  const [firstNumbers, setFirstNumbers] = useState('');
  const [secondNumbers, setSecondNumbers] = useState('');
  const [thirdNumbers, setThirdNumbers] = useState('');
  const [fourthNumbers, setFourthNumbers] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [publisher, serPublisher] = useState('');
  const [cvc, setCVC] = useState('');
  const [password, setPassword] = useState('');

  const [isComplete, setIsComplete] = useState(false);

  console.log(brandName);
  return (
    <>
      <CardTemplate
        brandName={brandName}
        firstNumbers={firstNumbers}
        secondNumbers={secondNumbers}
        thirdNumbers={thirdNumbers}
        fourthNumbers={fourthNumbers}
        expireDate={expireDate}
        publisher={publisher}
      />
      {!isComplete && (
        <CardForm
          setBrandName={setBrandName}
          firstNumbers={firstNumbers}
          secondNumbers={secondNumbers}
          thirdNumbers={thirdNumbers}
          fourthNumbers={fourthNumbers}
          setFirstNumbers={setFirstNumbers}
          setSecondNumbers={setSecondNumbers}
          setThirdNumbers={setThirdNumbers}
          setFourthNumbers={setFourthNumbers}
          expireDate={expireDate}
          setExpireDate={setExpireDate}
          publisher={publisher}
          setPublisher={serPublisher}
          cvc={cvc}
          setCVC={setCVC}
          password={password}
          setPassword={setPassword}
          setIsComplete={setIsComplete}
        />
      )}
      {isComplete && (
        <CardAddComplete
          cardList={cardList}
          firstNumbers={firstNumbers}
          secondNumbers={secondNumbers}
          thirdNumbers={thirdNumbers}
          fourthNumbers={fourthNumbers}
          expireDate={expireDate}
          publisher={publisher}
          cvc={cvc}
          password={password}
          setCurrentView={setCurrentView}
          setCardList={setCardList}
        />
      )}
    </>
  );
};

export default CardAddForm;
