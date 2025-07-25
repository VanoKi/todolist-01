import './App.css'
import {Todolist} from "./components/Todolist.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store.ts";
import {useState} from "react";

export type Task = {
  id: string,
  title: string,
  isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
  const tasks = useSelector((state: AppRootState) => state.tasks)
  const dispatch = useDispatch();

  // const v1 = () => crypto.randomUUID()
  const [filter, setFilter] = useState<FilterType>('all')

  const removeTask = (taskId:string) => {
    dispatch({type: 'REMOVE_TASK', id: taskId})
  }
  const addTask = (task:string) => {
    dispatch({type: 'ADD_TASK', title: task})
  }
  const changeStatus = (taskId:string) => {
    dispatch({type: 'CHANGE_TASK_STATUS', id: taskId})
  }
  const changeFiler = (filter:FilterType) => {
    switch (filter) {
      case "active": return tasks.filter(task => !task.isDone )
      case "completed": return tasks.filter(task => task.isDone )
      default: return tasks
    }
  }

  return (
      <div className="app">
        <Todolist
          tasks={changeFiler(filter)}
          removeTask={removeTask}
          changeStatus={changeStatus}
          setFilter={setFilter}
          addTask={addTask}
        />
      </div>
  )
}

export default App
