import {Task} from "../App.tsx";
import {Button} from "./Button.tsx";

type Props = {
  title: string
  tasks: Task[]
};
export const TodolistItem = (props: Props) => {
  const {title, tasks} = props
  const mappedLlist = (tasks:Task[]) => {
    return tasks.map( task => (
      <li key={task.id}>
        <input type={'checkbox'} checked={task.isDone}/>
        <span>{task.title}</span>
        <Button title={'x'}/>
      </li>
    ))
  }
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input/>
        <Button title={'x'}/>
      </div>
      <ul>
        {tasks.length > 0 ? mappedLlist(tasks) : "There are no tasks"}
      </ul>
      <div>
        <Button title={'All'}/>
        <Button title={'Active'}/>
        <Button title={'Completed'}/>
      </div>
    </div>
  );
};