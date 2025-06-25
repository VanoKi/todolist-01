import './App.css'
import {useReducer, useState} from "react";
import {Todolist} from "./components/Todolist.tsx";
import {taskReducer, ActionType} from "./reducer/tasksReducer.tsx";

export type Task = {
  id: string,
  title: string,
  isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'
export const v1 = () => crypto.randomUUID()

const initialTasks: Task[] = [
  { id: v1(), title: 'HTML&CSS', isDone: true },
  { id: v1(), title: 'JS', isDone: true },
  { id: v1(), title: 'ReactJS', isDone: false },
]

function App() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  const changeFilter = (filter:FilterType) => {
    switch (filter) {
      case "active": return tasks.filter(task => !task.isDone )
      case "completed": return tasks.filter(task => task.isDone )
      default: return tasks
    }
  }

  return (
      <div className="app">
        <Todolist
          tasks={changeFilter(filter)}
          dispatch={dispatch}
          setFilter={setFilter}
        />
      </div>
  )
}

export default App
