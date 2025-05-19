import {Task} from "../App.tsx";

type Props = {
  title: string
  tasks: Task[]
};
export const TodolistItem = (props: Props) => {
  const {title, tasks} = props
  const mappedLlist = (tasks:Task[]) => {
    return tasks.map( task => (
      <li key={task.id}>
        <input type={'checkbox'} checked={task.isDone}/>
        <span>{task.title}</span>
      </li>
    ))
  }
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <ul>
        {tasks.length > 0 ? mappedLlist(tasks) : "There are no tasks"}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};