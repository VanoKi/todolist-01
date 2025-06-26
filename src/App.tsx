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

const todolistId1 = v1()
const todolistId2 = v1()

function App() {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')
  const [todolists, setTodolists] = useState<Todolist[]>(
    [{id: v1(), title: 'What to learn', filter: 'all'},
    {id: v1(), title: 'What to buy', filter: 'all'}]
  )
  const [tasks, setTasks] = useState({
    [todolistId1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
    ],
    [todolistId2]: [
      { id: v1(), title: 'Rest API', isDone: true },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
  })

  const changeFilter = (todolistId: string, filter:FilterValues) => {
    setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter} : tl))
  }
  const deleteTask = (todolistId:string, taskID: string) => {
    setTasks({...tasks, [todolistId]: tasks[todolistId].filter(task => task.id !== taskID)})
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
        {todolists.map(tl => {
          let filteredTasks = tasks
          let filter = tl.filter
          if (filter === 'active') {
            filteredTasks = tasks.filter(task => !task.isDone)
          } else if (filter === 'completed') {
            filteredTasks = tasks.filter(task => task.isDone)
          }
          return (
            <TodolistItem
              key={tl.id}
              todolist={tl}
              tasks={filteredTasks}
              deleteTask={deleteTask}
              changeFilter={changeFilter}
              inputValue={inputValue}
              onInputChange={onInputChange}
              addTask={addTask}
              changeTask={changeTask}
              error={error}
            />
          )
        })}
      </div>
  )
}

export default App
