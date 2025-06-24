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
  const [error, setError] = useState(false)
  const onClickHandler = () => {
    const trimmedValue = value.trim()
    if (trimmedValue) {
      addItem(value.trim())
      setValue('')
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <input
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}/>
      <Button onClick={onClickHandler} title={'+'}/>
      {error && <div>The input can't be an empty</div>}
    </div>
  );
};