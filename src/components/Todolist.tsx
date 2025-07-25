// @flow
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../store.ts";
import {FilterType} from "../App.tsx";
import {useState} from "react";

export const Todolist = () => {
  const tasks = useSelector((state: AppRootState) => state.tasks);
  const dispatch = useDispatch();
  const removeTask = (taskId:string) => {
    dispatch({type: 'REMOVE_TASK', id: taskId})
  }
  const addTask = (task:string) => {
    dispatch({type: 'ADD_TASK', title: task})
  }
  const changeStatus = (taskId:string) => {
    dispatch({type: 'CHANGE_TASK_STATUS', id: taskId})
  }

  const [filter, setFilter] = useState<FilterType>('all')
  const changeFiler = (filter:FilterType) => {
    switch (filter) {
      case "active": return tasks.filter(task => !task.isDone )
      case "completed": return tasks.filter(task => task.isDone )
      default: return tasks
    }
  }

  return (
      <div>
        <h3>What to learn</h3>
        <div>
          <Input addItem={addTask}/>
        </div>
        <ul>
          {changeFiler(filter).map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => changeStatus(task.id)}
              />
              <span>{task.title}</span>
              <Button onClick={() => removeTask(task.id)} title={'x'}/>
            </li>
          ))}
        </ul>
        <div>
          <Button onClick={()=> setFilter('all')} title={'All'}/>
          <Button onClick={()=> setFilter('active')} title={'Active'}/>
          <Button onClick={()=> setFilter('completed')} title={'Completed'}/>
        </div>
      </div>
  );
};