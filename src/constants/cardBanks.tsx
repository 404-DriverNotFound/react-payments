type bankTypes = 'A카드' | 'B카드' | 'C카드' | 'D카드' | 'E은행' | 'F은행' | 'G은행' | 'H은행';

// eslint-disable-next-line no-unused-vars
type colorTypes = {[key in bankTypes]: string};

export const BANK_LIST: bankTypes[] = [
  'A카드', 'B카드', 'C카드', 'D카드',
  'E은행', 'F은행', 'G은행', 'H은행',
];

export const BANK_COLOR: colorTypes = {
  A카드: 'red',
  B카드: 'yellow',
  C카드: 'green',
  D카드: 'blue',
  E은행: 'gray',
  F은행: 'pink',
  G은행: 'purple',
  H은행: 'violet',
};
