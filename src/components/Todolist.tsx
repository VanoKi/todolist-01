// @flow 
import {TaskType} from "../App.tsx";
import {Button} from "./Button.tsx";

type Props = {
  title: string
  tasks: TaskType[]
};

export const Todolist = (props: Props) => {
  const {title, tasks} = props
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input/>
        <Button title={'+'}/>
      </div>
      <ul>
        {tasks.map( task => {
          return (
            <li>
              <input type='checkbox' checked={task.isDone}/>
              <span>{task.title}</span>
              <Button title={'x'}/>
            </li>
          )
        })}
      </ul>
      <div>
        <Button title={'All'}/>
        <Button title={'Active'}/>
        <Button title={'Completed'}/>
      </div>
    </div>
  );
};