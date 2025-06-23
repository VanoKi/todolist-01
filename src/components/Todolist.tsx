// @flow 
import * as React from 'react';
import {TaskType} from "../App.tsx";
import {Button} from "./Button.tsx";

type Props = {
  title: string
  tasks: TaskType[]
};

export const Todolist = (props: Props) => {
  const {title, tasks} = props
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <ul>
        {tasks.map( task => {
          return (
            <li>
              <input type='checkbox' checked={task.isDone}/>
              <span>{task.title}</span>
              <Button title={'x'}/>
            </li>
          )
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};