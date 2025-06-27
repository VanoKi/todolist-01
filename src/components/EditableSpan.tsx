// @flow 
import {useState} from "react";

type Props = {
  value: string
};
export const EditableSpan = (props: Props) => {
  const [isEditMode, setEditMode] = useState(false)
  const turnOnEditMode = () => {setEditMode(true)}
  const turnOffEditMode = () => {
    setEditMode(false)
  }
  return (
    <>
      {isEditMode
        ? (
          <input value={props.value} autoFocus onBlur={turnOffEditMode}/>
        )
          :(
            <span onDoubleClick={turnOnEditMode}>{props.value}</span>
        )}
    </>
  );
};