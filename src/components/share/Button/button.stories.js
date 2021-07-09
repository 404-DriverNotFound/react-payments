import React from 'react';
import Button from './button';

export default {
  title: 'Button',
  component: Button
}

export const Active = () => <Button variant='active'>Active</Button>
export const Disabled = () => <Button variant='disabled' disabled={true}>Disabled</Button>