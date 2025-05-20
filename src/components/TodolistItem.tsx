import {Task} from "../App.tsx";
import {Button} from "./Button.tsx";
import {ChangeEvent} from "react";

type Props = {
  title: string
  tasks: Task[]
  deleteTask: (taskId:string) => void
  changeFilter: (filter: string) => void
  inputValue: string
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  addTask: () => void
};
export const TodolistItem = (props: Props) => {
  const {title, tasks, deleteTask, changeFilter, inputValue, onInputChange, addTask} = props

  const mappedLlist = (tasks:Task[]) => {
    return tasks.map( task => (
      <li key={task.id}>
        <input type={'checkbox'} checked={task.isDone}/>
        <span>{task.title}</span>
        <Button title={'x'} onClick={() => deleteTask(task.id)}/>
      </li>
    ))
  }
  const keyDown =(event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <input
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={(e) => keyDown(e)}
        />
        <Button title={'+'} onClick={addTask}/>
      </div>
      <ul>
        {!!tasks.length ? mappedLlist(tasks) : "There are no tasks"}
      </ul>
      <div>
        <Button title={'All'} onClick={() => changeFilter('all')}/>
        <Button title={'Active'} onClick={() => changeFilter('active')}/>
        <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
      </div>
    </div>
  );
};