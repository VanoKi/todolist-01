import {Task} from "../App.tsx";

const initialState:Task[] = []
type Action = { type: 'REMOVE_TASK', id:string } |
  { type: 'ADD_TASK', title:string } |
  { type:'CHANGE_TASK', id:string }

export const taskReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case 'REMOVE_TASK': {
      return state.filter((task) => task.id !== action.id)
    }
    case 'ADD_TASK': {
      const newTask = {id: crypto.randomUUID(), title: action.title, isDone: false}
      return [newTask, ...state]
    }
    case 'CHANGE_TASK': {
      return state.map(task => task.id === action.id ? {...task, isDone: !task.isDone} : task)
    }
    // case 'CHANGE_FILTER': {
    //   return
    // }
    default:
      return state
  }
}