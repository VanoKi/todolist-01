import './App.css'
import {Todolist} from "./components/Todolist.tsx";
import {Input} from "./components/Input.tsx";
import {useState} from "react";

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type TodolistType = {
  id: string
  title: string
  tasks: TaskType[]
}

function App() {
  const createId = () => crypto.randomUUID()
  const [todolists, setTodolists] = useState([
    {
      id: createId(),
      title: 'What to learn',
      tasks: [
        {id: '1', title: 'HTML&CSS', isDone: true},
        {id: '2', title: 'JS', isDone: true},
        {id: '3', title: 'React', isDone: false},
      ]
    },
    {
      id: createId(),
      title: 'What to buy',
      tasks: [
        {id: '1', title: 'Milk', isDone: true},
        {id: '2', title: 'Bread', isDone: false},
      ]
    }
  ])

  const removeTodolist = (todolistId: string) => {
    setTodolists(todolists.filter( tl => tl.id !== todolistId))
  }

  const addTodolist = (newTodolist:string) => {
    setTodolists({newTodolist: [], ...todolists})
  }

  // console.log(todolists)

  const removeTask = ({todolistId, taskId}:{todolistId: string, taskId: string}) => {
    setTodolists(todolists.map(tl => tl.id === todolistId ?
      {...tl, tasks: tl.tasks.filter(task => task.id !== taskId)}
      :tl))
  }
  const changeTaskStatus = (todolistId: string, taskId:string) => {}

  return (
    <div className="app">
      <Input addItem={addTodolist}/>
      {todolists.map( tl => {
        return (
          <Todolist
            title={tl.title}
            tasks={tl.tasks}
            key={tl.id}
            todolistId={tl.id}
            removeTodolist={() => removeTodolist(tl.id)}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  )
}

export default App
