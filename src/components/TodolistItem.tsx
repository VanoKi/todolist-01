import {FilterValues, Task, Todolist} from "../App.tsx";
import {Button} from "./Button.tsx";
import {ChangeEvent} from "react";
import {KeyboardEvent} from "react";

type Props = {
  todolist: Todolist
  tasks: Task[]
  deleteTask: (todolistId:string, taskId:string) => void
  changeFilter: (todolistId: string, filter: FilterValues) => void
  inputValue: string
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  addTask: (todolistId:string) => void
  changeTask: (todolistId:string, taskId:string) => void
  error: string
};
export const TodolistItem = (props: Props) => {
  const {todolist: {id, title, filter}, tasks, deleteTask, changeFilter, inputValue, onInputChange, addTask, changeTask, error} = props

  const mappedLlist = (tasks:Task[]) => {
    return tasks.map( task => (
      <li key={task.id}>
        <input
          type={'checkbox'}
          checked={task.isDone}
          onChange={() => changeTask(id, task.id)}
        />
        <span>{task.title}</span>
        <Button title={'x'} onClick={() => deleteTask(id, task.id)}/>
      </li>
    ))
  }
  const keyDown =(event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTask(id)
    }
  }
  const getFilterClass = (btnFilter: string) => {
    return filter === btnFilter ? 'active-filter' : ''
  }
  const changeFilterHandler = (filter: FilterValues) => {
    changeFilter(id, filter)
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
        <Button title={'+'} onClick={() => addTask(id)}/>
        {error && <div className={'error-message'}>{error}</div>}
      </div>
      <ul>
        {!!tasks.length ? mappedLlist(tasks) : "There are no tasks"}
      </ul>
      <div>
        <Button
          title={'All'}
          onClick={() => changeFilterHandler('all')}
          className={getFilterClass('all')}
        />
        <Button
          title={'Active'}
          onClick={() => changeFilterHandler('active')}
          className={getFilterClass('active')}
        />
        <Button
          title={'Completed'}
          onClick={() => changeFilterHandler('completed')}
          className={getFilterClass('completed')}
        />
      </div>
    </div>
  );
};