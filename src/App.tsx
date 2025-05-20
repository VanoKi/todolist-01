import './App.css'
import {TodolistItem} from "./components/TodolistItem.tsx";
import {useState} from "react";
import {v1} from 'uuid'

export type Task = {
  id: string
  title: string
  isDone: boolean
}

function App() {
  const [filter, setFilter] = useState('all')
  const [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ])

  const changeFilter = (filter:string) => setFilter(filter)
  const deleteTask = (taskID: string) => {
    setTasks(tasks.filter(task => task.id !== taskID))
  }
  let filterdTasks = tasks
  if (filter === 'active') {
    filterdTasks = tasks.filter(task => !task.isDone)
  } else if (filter === 'completed') {
    filterdTasks = tasks.filter(task => task.isDone)
  }


  return (
      <div className="app">
        <TodolistItem
          title={'What to learn'}
          tasks={filterdTasks}
          deleteTask={deleteTask}
          changeFilter={changeFilter}
        />
      </div>
  )
}

export default App
