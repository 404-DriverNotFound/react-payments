import React from 'react';
import FlexSpaceAround from './flexSpaceAround';

export default {
  title: 'FlexSpaceAround',
  component: FlexSpaceAround,
}

// export const Disabled = () => <Input size='small'></Input>
export const Active = () => {
  return (
    <>
      <FlexSpaceAround>
        <span>123</span>
        <span>456</span>
        <span>789</span>
      </FlexSpaceAround>
    </>
  )
};