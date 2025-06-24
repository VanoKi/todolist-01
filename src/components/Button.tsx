// @flow 
import * as React from 'react';

type Props = {
  onClick: () => void
  title: string
};
export const Button = (props: Props) => {
  const {title, onClick} = props
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
};