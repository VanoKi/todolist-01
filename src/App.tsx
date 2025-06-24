import './App.css'
import {useState} from "react";

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
        <div>
          <h3>What to learn</h3>
          <div>
            <input/>
            <button>+</button>
          </div>
          <ul>
            <li>
              <input type="checkbox" checked={true}/> <span>HTML&CSS</span>
            </li>
            <li>
              <input type="checkbox" checked={true}/> <span>JS</span>
            </li>
            <li>
              <input type="checkbox" checked={false}/> <span>React</span>
            </li>
          </ul>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
      </div>
  )
}

export default App
