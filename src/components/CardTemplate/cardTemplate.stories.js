import React from 'react';
import CardTemplate from './cardTemplate';

export default {
  title: 'CardTemplate',
  component: CardTemplate,
};

export const defaultCard = () => {
  return (
    <CardTemplate
      cardNumber={123}
      expireDate={11 / 11}
      publisher={'kmin'}
      cvc={123}
      password={123}
    />);
}
