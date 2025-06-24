// @flow
import {Task} from "../App.tsx";
import {Button} from "./Button.tsx";

type Props = {
  tasks: Task[]
};
export const Todolist = (props: Props) => {
  const {tasks} = props
  return (
      <div>
        <h3>What to learn</h3>
        <div>
          <input/>
          <Button onClick={() => {console.log('Bang')}} title={'+'}/>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
            </li>
          ))}
        </ul>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
  );
};