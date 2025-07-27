import {Todolist} from "../App.tsx";
import {createAction, nanoid} from "@reduxjs/toolkit";

const initialState: Todolist[] = []
export const todolistReducer = (state: Todolist[] = initialState, action: Actions):Todolist[] => {
  switch (action.type) {
    case 'delete_todolist' : {
      return state.filter(tl => tl.id !== action.payload.id)
    }
    case 'create_todolist' : {
      const newTodolist:Todolist = {id: action.payload.id, title: action.payload.title, filter: 'all'}
      return [newTodolist, ...state]
    }
    case 'change_todolist_title' : {
      return state.map(tl => tl.id === action.payload.id ? {...tl, title: action.payload.title} : tl)
    }
    case 'change_filter' : {
      return state.map(tl => tl.id === action.payload.id ? {...tl, filter: action.payload.filter} : tl)
    }
    default: return state
  }
}

export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
export type ChangeTodolistTitleAction = ReturnType<typeof changeTodolistTitleAC>
export type ChangeTodolistFilterAction = ReturnType<typeof changeTodolistFilterAC>

type Actions = DeleteTodolistAction | CreateTodolistAction | ChangeTodolistTitleAction | ChangeTodolistFilterAction

export const deleteTodolistAC = createAction<{ id: string }>('todolists/deleteTodolist')

export const createTodolistAC = createAction('todolists/createTodolist', (title: string) => {
  return {payload: {title, id: nanoid()}}
})

export const changeTodolistTitleAC = createAction<{id: string, title: string}>('todolists/changeTodolistTitle')

export const changeTodolistFilterAC = createAction<>('todolists/changeTodolistFilter')