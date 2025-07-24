import {Task} from "./App.tsx";

type Actions =
  | {type: 'ADD_TASK', title: string}
  | {type: 'REMOVE_TASK', id: string}
  | {type: 'CHANGE_TASK_STATUS', id: string}

const v1 = () => crypto.randomUUID()

const initialState: Task[] = [
  { id: v1(), title: 'HTML&CSS', isDone: true },
  { id: v1(), title: 'JS', isDone: true },
  { id: v1(), title: 'ReactJS', isDone: false },
]

export const taskReducer = (state = initialState, action: Actions):Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [{id: v1(), title: action.title, isDone: true}]
    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.id)
    case "CHANGE_TASK_STATUS":
      return state.map(task => task.id === action.id ? {...task, isDone: !task.isDone} : task)
    default: return state
  }
}