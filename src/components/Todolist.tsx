// @flow
import {Task} from "../App.tsx";
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";

type Props = {
  tasks: Task[]
  removeTask: (taskId:string) => void
};
export const Todolist = (props: Props) => {
  const {tasks, removeTask} = props
  const Bang = () => {console.log('Bang')}
  return (
      <div>
        <h3>What to learn</h3>
        <div>
          <Input />
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone}/>
              <span>{task.title}</span>
              <Button onClick={() => removeTask(task.id)} title={'x'}/>
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