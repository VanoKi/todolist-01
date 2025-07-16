import type {TasksState} from '../App'
import {CreateTodolistAction, DeleteTodolistAction} from "./todolist-reducer.ts";

const initialState: TasksState = {}

export const tasksReducer = (state: TasksState = initialState, action: Actions): TasksState => {
  switch (action.type) {
    case 'create_todolist': {
      return {...state, [action.payload.id] : []}
    }
    case 'delete_todolist' : {
      const newState = {...state}
      delete newState[action.payload.id]
      return newState
    }
    default:
      return state
  }
}

export type DeleteTodolistAction = ReturnType<typeof deleteTaskAC>
type Actions = CreateTodolistAction | DeleteTodolistAction

export const deleteTaskAC = () => {
  return {type: 'delete_todolist', payload: {id, taskId}}
}