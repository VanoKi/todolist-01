import {Task} from './types.ts'
import {v1} from "../App.tsx";

export type TasksState = Task[]

type ActionType =
  | {type: 'ADD-TASK', payload: {title: string}}
  | {type: 'REMOVE-TASK', payload: {id: string}}
  | {type: 'TOGGLE-TASK', payload: {id: string}}

export const taskReducer = (state: TasksState, action: ActionType):TasksState => {
  switch (action.type) {
    case "ADD-TASK":
      return [{id: v1(), title: action.payload.title, isDone: false}, ...state]
    case "REMOVE-TASK":
      return state.filter( t => t.id !== action.payload.id)
    case "TOGGLE-TASK": {
      return state.map(t => t.id === action.payload.id
        ? {...t, isDone: !t.isDone}
        : t)
    }
    default: return state
  }
}