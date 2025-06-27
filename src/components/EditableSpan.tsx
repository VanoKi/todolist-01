// @flow 
import {ChangeEvent, useState} from "react";

type Props = {
  value: string
  onChange: (title:string) => void
};
export const EditableSpan = (props: Props) => {
  const [isEditMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(props.value)
  const turnOnEditMode = () => {setEditMode(true)}
  const turnOffEditMode = () => {
    setEditMode(false)
    props.onChange(title)
  }
  const changeTitle = (e:ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const onKeyDownHadler = (e:KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      turnOffEditMode()
    }
    if (e.key === 'Escape') {
      setTitle(props.value)
    }
  }
  return (
    <>
      {isEditMode
        ? (
          <input
            value={title}
            autoFocus
            onBlur={turnOffEditMode}
            onChange={changeTitle}
            onKeyDown={onKeyDownHadler}
          />
        )
          :(
            <span onDoubleClick={turnOnEditMode}>{props.value}</span>
        )}
    </>
  );
};