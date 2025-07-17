import type {Task, TaskState} from '../App'
import {CreateTodolistAction, DeleteTodolistAction} from "./todolist-reducer.ts";
import {v1} from "uuid";

const initialState: TaskState = {}

export const tasksReducer = (state: TaskState = initialState, action: Actions): TaskState => {
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
    case 'change_task_status' : {
      const todolistId = action.payload.id
      const taskId = action.payload.taskId
      const status = action.payload.status
      return {...state, [todolistId] :state[todolistId].map(task => task.id === taskId ? {...task, isDone: status} : task)}
    }
    case 'change_task_title' : {
      const {id: todolistId, taskId, title} = action.payload
      return {...state, [todolistId]:state[todolistId].map(task => task.id === taskId ? {...task, title} : task)}
    }
    default:
      return state
  }
}

export type DeleteTaskAction = ReturnType<typeof deleteTaskAC>
export type CreateTaskAction = ReturnType<typeof createTaskAC>
export type ChangeTaskStatusAction = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleAction = ReturnType<typeof changeTaskTitleAC>
type Actions = CreateTodolistAction | DeleteTodolistAction | DeleteTaskAction | CreateTaskAction | ChangeTaskStatusAction | ChangeTaskTitleAction

export const deleteTaskAC = ({id, taskId}:{id:string, taskId:string}) => {
  return {type: 'delete_task', payload: {id, taskId}} as const
}

export const createTaskAC = ({id, title} : {id: string, title: string}) => {
  return {type: 'create_task', payload: {id, title}} as const
}

export const changeTaskStatusAC = ({id, taskId, status}:{id:string, taskId:string, status:boolean}) => {
  return {type: 'change_task_status', payload: {id, taskId, status}} as const
}

export const changeTaskTitleAC = ({id, taskId, title}:{id:string, taskId:string, title:string}) => {
  return {type: 'change_task_title', payload: {id, taskId, title}} as const
}
