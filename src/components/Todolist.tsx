// @flow
import {FilterType} from "../App.tsx";
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import {Task} from '../reducer/types.ts'
import * as React from "react";
import {ActionType} from "../reducer/tasksReducer.tsx";

type Props = {
  tasks: Task[]
  setFilter: (filter:FilterType) => void
  dispatch: React.Dispatch<ActionType>
};
export const Todolist = (props: Props) => {
  const {tasks, setFilter, dispatch} = props
  return (
      <div>
        <h3>What to learn</h3>
        <div>
          <Input addItem={(title) => dispatch({type: 'ADD-TASK', payload: {title}}) }/>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => dispatch({ type: 'TOGGLE-TASK', payload: { id: task.id } })}
              />
              <span>{task.title}</span>
              <Button
                title={'x'}
                onClick={() => dispatch({ type: 'REMOVE-TASK', payload: { id: task.id } })}/>
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