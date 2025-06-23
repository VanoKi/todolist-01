// @flow
import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
  addItem?: (title: string) => void
};
export const Input = (props: Props) => {
  const {addItem} = props
  const [value, setValue] = useState('')
  const onAddClick = () => {
    if (value.trim()) {
      if (addItem) {
        addItem(value)
      }
      setValue('')
    }
  }
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Button
        title={'+'}
        onClick={onAddClick}
      />
    </div>
  );
};