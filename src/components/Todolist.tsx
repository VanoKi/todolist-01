// @flow
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../store.ts";
import {addTask, changeStatus, removeTask} from "../taskSlice.ts";
import {setFilter} from "../filterSlice.ts";

export const Todolist = () => {
  const tasks = useSelector((state: AppRootState) => state.tasks);
  const dispatch = useDispatch();
  const filter = useSelector((state: AppRootState) => state.filter);
  const filteredTasks = (() => {
    switch (filter) {
      case "active": return tasks.filter(task => !task.isDone )
      case "completed": return tasks.filter(task => task.isDone )
      default: return tasks
    }
  })()

  return (
      <div>
        <h3>What to learn</h3>
        <div>
          <Input addItem={(title) => dispatch(addTask(title))}/>
        </div>
        <ul>
          {filteredTasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => dispatch(changeStatus(task.id))}
              />
              <span>{task.title}</span>
              <Button onClick={() => dispatch(removeTask(task.id))} title={'x'}/>
            </li>
          ))}
        </ul>
        <div>
          <Button onClick={()=> dispatch(setFilter('all'))} title={'All'}/>
          <Button onClick={()=> dispatch(setFilter('active'))} title={'Active'}/>
          <Button onClick={()=> dispatch(setFilter('completed'))} title={'Completed'}/>
        </div>
      </div>
  );
};