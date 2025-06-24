// @flow 
import * as React from 'react';
import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
  
};
export const Input = (props: Props) => {
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <div>
      <input onChange={(e) => setValue(e.currentTarget.value)} value={value}/>
      <Button onClick={() => {console.log(value)}} title={'+'}/>
    </div>
  );
};