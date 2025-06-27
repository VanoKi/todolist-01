// @flow 
import {Button} from "./Button.tsx";
import {ChangeEvent, useState} from "react";

type Props = {
  addItem: (title:string) => void
};
export const CreateItemForm = (props: Props) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const createItemHandler = () => {
    const trimmedTitle = title.trim()
    if (trimmedTitle) {
      props.addItem(title)
      setTitle('')
    }else {
      setError('Title is required')
    }
  }
  const createItemOnKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      createItemHandler()
    }
  }
  const changeItemHandler (e:ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
    setError(null)
  }
  return (
    <div className={'container'}>
      <input value={title}
             onChange={changeItemHandler}
             onKeyDown={createItemOnKeyDownHandler}
      />
      <Button title={'+'} onClick={createItemHandler}/>
      {error && <div className={'error-message'}>{error}</div>}
    </div>
  );
};