// @flow
import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
  addItem?: (title: string) => void
};
export const Input = (props: Props) => {
  const {addItem} = props
  const [value, setValue] = useState('')
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Button
        title={'+'}
        onClick={() => addItem(value)}
      />
    </div>
  );
};