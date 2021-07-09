import React, { Dispatch, SetStateAction, useState } from 'react';
import Label from '@components/share/Label/label';
import Input from '@components/share/Input/input';
import Button from '@components/share/Button/button';
import { View } from '@constant/constant';
import Card from '@typesCards/types.cards';

interface CardAddCompleteProps {
  cardList: Card[];
  brandName: string;
  firstNumbers: string;
  secondNumbers: string;
  thirdNumbers: string;
  fourthNumbers: string;
  expireDate: string;
  publisher: string;
  cvc: string;
  password: string;
  setCurrentView: Dispatch<SetStateAction<View>>;
  setCardList: Dispatch<SetStateAction<Card[]>>;
}

const CardAddComplete = ({
  cardList,
  brandName,
  firstNumbers,
  secondNumbers,
  thirdNumbers,
  fourthNumbers,
  setCurrentView,
  setCardList,
  expireDate,
  publisher,
  cvc,
  password,
}: CardAddCompleteProps) => {
  const [nickname, setNickname] = useState('기본 카드');
  const handleNicknameChange = ({ target }: { target: HTMLInputElement }) => {
    setNickname(target.value);
  };
  const goToCardList = (event: Event) => {
    event.preventDefault();
    const newCard: Card = {
      cardBrand: brandName,
      cardNumber: [firstNumbers, secondNumbers, thirdNumbers, fourthNumbers],
      expDate: expireDate,
      publisher,
      cvc,
      password,
      nickname,
    };
    setCurrentView(View.List);
    setCardList([...cardList, newCard]);
  };
  return (
    <>
      <Label value={'카드 등록이 완료되었습니다!'}>
        <Input
          placeholder={'별칭을 입력해주십시오...'}
          value={nickname}
          onChange={handleNicknameChange}
        />
        <Button
          variant={'active'}
          value={'완료'}
          position={'bottom-right'}
          onClick={goToCardList}
        />
      </Label>
    </>
  );
};

export default CardAddComplete;
