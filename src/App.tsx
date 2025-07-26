import './App.css'
import {Todolist} from "./components/Todolist.tsx";
import {Provider} from "react-redux";
import {store} from "./store.ts";

export type Task = {
  id: string,
  title: string,
  isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {

  return (
      <Provider store={store}>
        <div className="app">
          <Todolist/>
        </div>
      </Provider>
  )
}

export default App
