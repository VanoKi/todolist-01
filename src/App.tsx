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
  const [filter, setFilter] = useState('all')
  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ])
  const removeTask = (taskId:string) => {
    setTasks(tasks.filter( t => t.id !== taskId))
  }

  return (
      <div className="app">
        <Todolist
          tasks={tasks}
          removeTask={removeTask}
        />
      </div>
  )
}

export default App
