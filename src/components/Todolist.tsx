// @flow 
import {TaskType} from "../App.tsx";
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";

type Props = {
  title: string
  tasks: TaskType[]
  removeTodolist: (todolistId:string) => void
  removeTask: () => void
};

export const Todolist = (props: Props) => {
  const {title, tasks, removeTodolist, removeTask} = props
  return (
    <div>
      <div className={'headline'}>
        <h3>{title}</h3>
        <Button
          title={'x'}
          onClick={removeTodolist}
        />
      </div>
      <div>
        <Input/>
      </div>
      <ul>
        {tasks.map( task => {
          return (
            <li key={task.id}>
              <input type='checkbox' checked={task.isDone}/>
              <span>{task.title}</span>
              <Button title={'x'} onClick={removeTask}/>
            </li>
          )
        })}
      </ul>
      <div className={'btn-wrapper'}>
        <Button title={'All'}/>
        <Button title={'Active'}/>
        <Button title={'Completed'}/>
      </div>
    </div>
  );
};