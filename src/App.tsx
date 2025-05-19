import './App.css'
import {TodolistItem} from "./components/TodolistItem.tsx";
import {useState} from "react";

export type Task = {
  id: number
  title: string
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ])

  const deleteTask = (taskID: number) => {
    setTasks(tasks.filter(task => task.id !== taskID))
  }

  return (
      <div className="app">
        <TodolistItem
          title={'What to learn'}
          tasks={tasks}
          deleteTask={deleteTask}
        />
      </div>
  )
}

export default App
