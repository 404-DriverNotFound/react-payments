import React from 'react';
import Input from './input';

export default {
  title: 'Input',
  component: Input
}

export const basicInput = () => <Input purpose={'input-basic'} placeholder='본인의 이름을 입력해주십시오...' />
export const numberInput = () => <Input purpose={'input-number'} maxlength={'4'} size='4' />
export const secretNumberInput = () => <Input purpose={'input-number input-secret'} maxlength={'4'} size='4' />