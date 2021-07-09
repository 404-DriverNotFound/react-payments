import React from 'react';
import Add from './add';
import FlexCenter from '../FlexCenter/flexCenter';

export default {
  title: 'Add',
  component: Add,
  decorators: [(story) => (<FlexCenter>{story()}</FlexCenter>),],
}

export const defaultAdd = () => <Add></Add>
