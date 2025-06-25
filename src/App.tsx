import './App.css'
import {TodolistItem} from "./components/TodolistItem.tsx";
import {ChangeEvent, useState} from "react";
import {v1} from 'uuid'

export type FilterValues = 'all' | 'active' | 'completed'
export type Task = {
  id: string
  title: string
  isDone: boolean
}
export type Todolist = {
  id: string
  title: string
  filter: FilterValues
}

function App() {
  const [filter, setFilter] = useState('all')
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')
  const [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ])

  const changeFilter = (filter:string) => setFilter(filter)
  const deleteTask = (taskID: string) => {
    setTasks(tasks.filter(task => task.id !== taskID))
  }
  let filteredTasks = tasks
  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.isDone)
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.isDone)
  }
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    setError('')
  }
  const addTask = () => {
    if (inputValue.trim()) {
      const newTask: Task = {
        id: v1(),
        title: inputValue,
        isDone: false
      }
      setTasks([newTask, ...tasks])
      setError('')
    } else {
      setError('Title is required')
    }
    setInputValue('')
  }
  const changeTask = (taskId:string) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, isDone: !task.isDone} : task))
  }

  return (
      <div className="app">
        <TodolistItem
          title={'What to learn'}
          tasks={filteredTasks}
          deleteTask={deleteTask}
          changeFilter={changeFilter}
          inputValue={inputValue}
          onInputChange={onInputChange}
          addTask={addTask}
          changeTask={changeTask}
          error={error}
          filter={filter}
        />
      </div>
  )
}

export default App
