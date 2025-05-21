import {Task} from "../App.tsx";
import {Button} from "./Button.tsx";
import {ChangeEvent} from "react";
import {KeyboardEvent} from "react";

type Props = {
  title: string
  tasks: Task[]
  deleteTask: (taskId:string) => void
  changeFilter: (filter: string) => void
  inputValue: string
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  addTask: () => void
  changeTask: (taskId:string) => void
  error: string
  filter: string
};
export const TodolistItem = (props: Props) => {
  const {title, tasks, deleteTask, changeFilter, inputValue, onInputChange, addTask, changeTask, error, filter} = props

  const mappedLlist = (tasks:Task[]) => {
    return tasks.map( task => (
      <li key={task.id}>
        <input
          type={'checkbox'}
          checked={task.isDone}
          onChange={() => changeTask(task.id)}
        />
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
  const getFilterClass = (btnFilter: string) => {
    return filter === btnFilter ? 'active-filter' : ''
  }

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <input
          className={error ? 'error' : ''}
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={keyDown}
        />
        <Button title={'+'} onClick={addTask}/>
        {error && <div className={'error-message'}>{error}</div>}
      </div>
      <ul>
        {!!tasks.length ? mappedLlist(tasks) : "There are no tasks"}
      </ul>
      <div>
        <Button
          title={'All'} onClick={() => changeFilter('all')}
          className={getFilterClass('all')}/>
        <Button
          title={'Active'}
          onClick={() => changeFilter('active')}
          className={getFilterClass('active')}/>
        <Button
          title={'Completed'}
          onClick={() => changeFilter('completed')}
          className={getFilterClass('completed')}/>
      </div>
    </div>
  );
};