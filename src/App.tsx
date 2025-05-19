import './App.css'
import {TodolistItem} from "./components/TodolistItem.tsx";

function App() {
  return (
      <div className="app">
        <TodolistItem
          title={'What to learn'}
        />
      </div>
  )
}

export default App
