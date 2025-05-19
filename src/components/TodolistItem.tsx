import {Task} from "../App.tsx";
import {Button} from "./Button.tsx";

type Props = {
  title: string
  tasks: Task[]
};
export const TodolistItem = (props: Props) => {
  const {title, tasks} = props

  const showId = () => alert(task.id)
  const mappedLlist = (tasks:Task[]) => {
    return tasks.map( task => (
      <li key={task.id}>
        <input type={'checkbox'} checked={task.isDone}/>
        <span>{task.title}</span>
        <Button title={'x'} onClick={showId}/>
      </li>
    ))
  }

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <input/>
        <Button title={'x'}/>
      </div>
      <ul>
        {!!tasks.length ? mappedLlist(tasks) : "There are no tasks"}
      </ul>
      <div>
        <Button title={'All'}/>
        <Button title={'Active'}/>
        <Button title={'Completed'}/>
      </div>
    </div>
  );
};