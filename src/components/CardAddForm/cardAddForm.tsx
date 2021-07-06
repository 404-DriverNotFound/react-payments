import React, { useState } from 'react';
import Card from '@components/Card/card';
import CardForm from '@components/CardForm/cardForm';

const CardAddForm = () => {
  const [firstNumbers, setFirstNumbers] = useState('');
  const [secondNumbers, setSecondNumbers] = useState('');
  const [thirdNumbers, setThirdNumbers] = useState('');
  const [fourthNumbers, setFourthNumbers] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [publisher, serPublisher] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Card
        firstNumbers={firstNumbers}
        secondNumbers={secondNumbers}
        thirdNumbers={thirdNumbers}
        fourthNumbers={fourthNumbers}
        expireDate={expireDate}
        publisher={publisher}
        cvc={cvc}
        password={password}
      />
      <CardForm
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
      />
    </>
  );
};

export default CardAddForm;