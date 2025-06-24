// @flow
import {Task} from "../App.tsx";
import {Button} from "./Button.tsx";

type Props = {
  tasks: Task[]
};
export const Todolist = (props: Props) => {
  const {tasks} = props
  const Bang = () => {console.log('Bang')}
  return (
      <div>
        <h3>What to learn</h3>
        <div>
          <input/>
          <Button onClick={Bang} title={'+'}/>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
            </li>
          ))}
        </ul>
        <div>
          <Button onClick={Bang} title={'All'}/>
          <Button onClick={Bang} title={'Active'}/>
          <Button onClick={Bang} title={'Completed'}/>
        </div>
      </div>
  );
};