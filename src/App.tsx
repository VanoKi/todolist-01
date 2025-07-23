import './App.css'
import {useReducer, useState} from "react";
import {Todolist} from "./components/Todolist.tsx";
import {taskReducer} from "./model/task-reducer.ts";

export type Task = {
  id: string,
  title: string,
  isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
  const v1 = () => crypto.randomUUID()
  const [filter, setFilter] = useState('all')
  const initial = [
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ]
  const [tasks, dispatchToTasks] = useReducer(taskReducer, initial)

  const removeTask = (taskId:string) => {
    // setTasks(tasks.filter( t => t.id !== taskId))
    dispatchToTasks({type: 'REMOVE_TASK', id: taskId})
  }
  const addTask = (task:string) => {
    // const newTask = {id: v1(), title: task, isDone: false}
    // setTasks([newTask, ...tasks])
    dispatchToTasks({type: 'ADD_TASK', title: task})
  }
  const changeStatus = (taskId:string) => {
    // setTasks(tasks.map(task => task.id === taskId
    //   ? {...task, isDone: !task.isDone}
    //   : task))
    dispatchToTasks({type: 'CHANGE_TASK', id: taskId})
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
