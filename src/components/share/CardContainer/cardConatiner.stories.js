import React from 'react';
import CardContainer from './cardContainer';

export default {
  title: 'CardContainer',
  component: CardContainer,
}


export const BasicContainer = () => <CardContainer type={'basic-container'}>aaaa</CardContainer>
export const AddContainer = () => <CardContainer type={'add-container'}>aaaa</CardContainer>