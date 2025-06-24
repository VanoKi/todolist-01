// @flow 
import {FilterType, TaskType} from "../App.tsx";
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import {useState} from "react";

type Props = {
  title: string
  tasks: TaskType[]
  todolistId: string
  removeTodolist: (todolistId:string) => void
  removeTask: ({todolistId: string, taskId: string}) => void
  changeTaskStatus: ({todolistId: string, taskId: string}) => void
  addTask: ({todolistId: string, task: string}) => void
};

export const Todolist = (props: Props) => {
  const {title, tasks, todolistId, removeTodolist, removeTask, changeTaskStatus, addTask} = props
  const [filter, setFilter] = useState('all')
  const filterdTasks = (filter:FilterType) => {
    switch (filter) {
      case "all": return tasks
      case "active": return tasks.filter( t => t.isDone )
      case "completed": return tasks.filter( t => !t.isDone )
    }
  }
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
        <Input addItem={(taskTitle) => addTask({todolistId, task: taskTitle})}/>
      </div>
      <ul>
        {filterdTasks(filter).map( task => {
          return (
            <li key={task.id}>
              <input type='checkbox' checked={task.isDone} onChange={() => changeTaskStatus({todolistId, taskId: task.id})}/>
              <span>{task.title}</span>
              <Button title={'x'} onClick={() => removeTask({todolistId, taskId: task.id})}/>
            </li>
          )
        })}
      </ul>
      <div className={'btn-wrapper'}>
        <Button title={'All'} onClick={() => setFilter('all')}/>
        <Button title={'Active'} onClick={() => setFilter('active')}/>
        <Button title={'Completed'} onClick={() => setFilter('completed')}/>
      </div>
    </div>
  );
};