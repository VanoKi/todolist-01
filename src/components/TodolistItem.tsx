import {FilterValues, Task, Todolist} from "../App.tsx";
import {Button} from "./Button.tsx";
import {CreateItemForm} from "./CreateItemForm.tsx";

type Props = {
  todolist: Todolist
  tasks: Task[]
  deleteTask: (todolistId:string, taskId:string) => void
  changeFilter: (todolistId: string, filter: FilterValues) => void
  addTask: (todolistId:string, title: string) => void
  changeTask: (todolistId:string, taskId:string) => void
  deleteTodolist: (todolistId: string) => void
};
export const TodolistItem = (props: Props) => {
  const {todolist: {id, title, filter}, tasks, deleteTask, changeFilter, addTask, changeTask, deleteTodolist} = props

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

  const getFilterClass = (btnFilter: string) => {
    return filter === btnFilter ? 'active-filter' : ''
  }
  const changeFilterHandler = (filter: FilterValues) => {
    changeFilter(id, filter)
  }
  const deleteTodolistHandelr = () => {
    deleteTodolist(id)
  }

  return (
    <div>
      <div className={'container'}>
        <h2>{title}</h2>
        <Button title={'x'} onClick={deleteTodolistHandelr}/>
      </div>
      <div>
        <CreateItemForm addItem={() => addTask(id, title)}/>
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