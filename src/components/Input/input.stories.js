import React from 'react';
import Input from './input';
import FlexColumn from '../FlexColumn/flexColumn';

export default {
  title: 'Input',
  component: Input,
  decorators: [(story) => (<FlexColumn>{story()}</FlexColumn>),],
}

// export const Disabled = () => <Input size='small'></Input>
export const Active = () => <Input type='text' size='medium' placeholder='카드 번호를 입력해주십시오...' />