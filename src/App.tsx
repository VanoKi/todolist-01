import './App.css'
import {Todolist} from "./components/Todolist.tsx";

export type Task = {
  id: string,
  title: string,
  isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {

  return (
      <div className="app">
        <Todolist/>
      </div>
  )
}

export default App
