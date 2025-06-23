// @flow 
import * as React from 'react';
import {TaskType} from "../App.tsx";

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