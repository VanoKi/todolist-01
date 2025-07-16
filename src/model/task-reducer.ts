import type {Task, TasksState} from '../App'
import {CreateTodolistAction, DeleteTodolistAction} from "./todolist-reducer.ts";
import {v1} from "uuid";

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
    case 'delete_task' : {
      const todolistId = action.payload.id
      const taskId = action.payload.taskId
      return {...state, [todolistId]:state[todolistId].filter(task => task.id !== taskId)}
    }
    case 'create_task' : {
      const newTask:Task = {
        id: v1(),
        title: action.payload.title,
        isDone: false
      }
      const todolistId = action.payload.id
      return {...state, [todolistId]:[newTask, ...state[todolistId]]}
    }
    default:
      return state
  }
}

export type DeleteTaskAction = ReturnType<typeof deleteTaskAC>
export type CreateTaskAction = ReturnType<typeof createTaskAC>
type Actions = CreateTodolistAction | DeleteTodolistAction | DeleteTaskAction | CreateTaskAction

export const deleteTaskAC = () => {
  return {type: 'delete_todolist', payload: {id, taskId}}
}

export const createTaskAC = () => {
  return {type: 'create_task', payload: {id, title}}
}