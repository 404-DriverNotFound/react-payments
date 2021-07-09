interface Card {
  cardBrand?: string;
  cardNumber: [string, string, string, string];
  expDate: string;
  publisher: string;
  cvc: string;
  password: string;
  nickname?: string;
}

export default Card;
