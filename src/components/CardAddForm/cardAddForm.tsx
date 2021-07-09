import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import CardTemplate from '@components/CardTemplate/cardTemplate';
import CardForm from '@components/CardForm/cardForm';
import CardAddComplete from '@components/CardAddComplete/cardAddComplete';
import { ABSOLUTE, View } from '@constant/constant';
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

  const [keyboard, setKeyboard] = useState<number[]>([]);

  const firstNumberInput = useRef<HTMLInputElement>(null);
  const secondNumberInput = useRef<HTMLInputElement>(null);
  const thirdNumberInput = useRef<HTMLInputElement>(null);
  const fourthNumberInput = useRef<HTMLInputElement>(null);
  const expireDateInput = useRef<HTMLInputElement>(null);
  const publisherInput = useRef<HTMLInputElement>(null);
  const cvcInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setKeyboard(getRandomNumbers(12));
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
          expireDate={expireDate}
          publisher={publisher}
          cvc={cvc}
          setCVC={setCVC}
          password={password}
          keyboard={keyboard}
          setFirstNumbers={setFirstNumbers}
          setSecondNumbers={setSecondNumbers}
          setThirdNumbers={setThirdNumbers}
          setFourthNumbers={setFourthNumbers}
          setExpireDate={setExpireDate}
          setPublisher={serPublisher}
          setPassword={setPassword}
          setIsComplete={setIsComplete}
          firstNumberInput={firstNumberInput}
          secondNumberInput={secondNumberInput}
          thirdNumberInput={thirdNumberInput}
          fourthNumberInput={fourthNumberInput}
          expireDateInput={expireDateInput}
          publisherInput={publisherInput}
          cvcInput={cvcInput}
          passwordInput={passwordInput}
        />
      )}
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
