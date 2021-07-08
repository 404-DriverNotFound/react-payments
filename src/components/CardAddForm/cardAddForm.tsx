import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CardTemplate from '@components/CardTemplate/cardTemplate';
import CardForm from '@components/CardForm/cardForm';
import CardAddComplete from '@components/CardAddComplete/cardAddComplete';
import { View } from '@constant/constant';
import Card from '@typesCards/types.cards';
import VirtualKeyboard from '@components/VirtualKeyboard/virtualKeyboard';
import { getRandomNumbers } from '@utils/utils';

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
  const [brandName, setBrandName] = useState<string>('purple-card');
  const [firstNumbers, setFirstNumbers] = useState<string>('');
  const [secondNumbers, setSecondNumbers] = useState<string>('');
  const [thirdNumbers, setThirdNumbers] = useState<string>('');
  const [fourthNumbers, setFourthNumbers] = useState<string>('');
  const [expireDate, setExpireDate] = useState<string>('');
  const [publisher, serPublisher] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isComplete, setIsComplete] = useState<boolean>(false);

  const [isMaskingInput, setIsMaskingInput] = useState<boolean>(false);

  const [keyboard, setKeyboard] = useState<number[]>([]);

  useEffect(() => {
    setKeyboard(getRandomNumbers(20));
  }, []);

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
          setIsMaskingInput={setIsMaskingInput}
        />
      )}
      {isMaskingInput &&
        <VirtualKeyboard
          position={'keyboard-absolute'}
          keyboard={keyboard}
        />}
      {isComplete && (
        <CardAddComplete
          cardList={cardList}
          brandName={brandName}
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
