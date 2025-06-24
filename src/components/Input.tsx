// @flow 
import * as React from 'react';
import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
  addItem: (item:string) => void
};
export const Input = (props: Props) => {
  const {addItem} = props
  const [value, setValue] = useState('')
  const onClickHandler = () => {
    if (value.trim() !== '') {
      addItem(value.trim())
      setValue('')
    }
  }

  return (
    <div>
      <input onChange={(e) => setValue(e.currentTarget.value)} value={value}/>
      <Button onClick={onClickHandler} title={'+'}/>
    </div>
  );
};