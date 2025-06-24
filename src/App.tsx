import './App.css'
import {useState} from "react";
import {Todolist} from "./components/Todolist.tsx";

export type Task = {
  id: string,
  title: string,
  isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
  const v1 = () => crypto.randomUUID()
  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ])

  return (
      <div className="app">
        <Todolist
          tasks={tasks}
        />
      </div>
  )
}

export default App
