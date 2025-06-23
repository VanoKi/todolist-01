import './App.css'
import {Todolist} from "./components/Todolist.tsx";

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

function App() {
  const createId = () => crypto.randomUUID()
  const todolists = [
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
  ]

  return (
    <div className="app">
      {todolists.map( tl => {
        return (
          <Todolist title={tl.title} tasks={tl.tasks}/>
        )
      })}
    </div>
  )
}

export default App
