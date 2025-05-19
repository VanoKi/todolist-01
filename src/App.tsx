import './App.css'
import {TodolistItem} from "./components/TodolistItem.tsx";
import {useState} from "react";

export type Task = {
  id: number
  title: string
  isDone: boolean
}

function App() {
  const [filter, setFilter] = useState('all')
  const [tasks, setTasks] = useState([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ])

  const changeFilter = (filter:string) => setFilter(filter)
  const deleteTask = (taskID: number) => {
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
