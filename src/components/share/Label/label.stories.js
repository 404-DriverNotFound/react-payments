import React from 'react';
import Label from './label';

export default {
  title: 'Label',
  component: Label,
}

// export const Disabled = () => <Input size='small'></Input>
export const defaultLabel = () => <Label value={'카드 번호'} />