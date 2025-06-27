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
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')
  const todolistId1 = v1()
  const todolistId2 = v1()
  const [todolists, setTodolists] = useState<Todolist[]>(
    [{id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'}]
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
  const addTask = (todolistId:string) => {
    if (inputValue.trim()) {
      const newTask: Task = {
        id: v1(),
        title: inputValue,
        isDone: false
      }
      setTasks({...tasks, [todolistId] : [newTask, ...tasks[todolistId]]})
      setError('')
    } else {
      setError('Title is required')
    }
    setInputValue('')
  }
  const changeTask = (todolistId:string, taskId:string) => {
    setTasks({...tasks, [todolistId]: tasks[todolistId].map( task => task.id === taskId ? {...task, isDone: !task.isDone} : task)})
  }
  const deleteTodolist = (todolistId:string) => {
    setTodolists(todolists.filter( tl => tl.id !== todolistId))
  }

  return (
      <div className="app">
        {todolists.map(tl => {
          let filteredTasks = tasks[tl.id]
          let filter = tl.filter
          if (filter === 'active') {
            filteredTasks = tasks[tl.id].filter(task => !task.isDone)
          } else if (filter === 'completed') {
            filteredTasks = tasks[tl.id].filter(task => task.isDone)
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
              deleteTodolist={deleteTodolist}
            />
          )
        })}
      </div>
  )
}

export default App
