import {Todolist} from "../App.tsx";
import {v1} from "uuid";

const initialState: Todolist[] = []
export const todolistReducer = (state: Todolist[] = initialState, action: Actions):Todolist[] => {
  switch (action.type) {
    case 'delete_todolist' : {
      return state.filter(tl => tl.id !== action.payload.id)
    }
    case 'create_todolist' : {
      const newTodolist:Todolist = {id: action.payload.id, title: action.payload.title, filter: 'all'}
      return [...state, newTodolist]
    }
    case 'change_todolist_title' : {
      return state.map(tl => tl.id === action.payload.id ? {...tl, title: action.payload.title} : tl)
    }
    default: return state
  }
}

export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
export type ChangeTodolistTitleAction = ReturnType<typeof changeTodolistTitleAC>

type Actions = DeleteTodolistAction | CreateTodolistAction | ChangeTodolistTitleAction

export const deleteTodolistAC = (id: string):DeleteTodolistAction => {
  return {type: 'delete_todolist', payload: {id}} as const
}

export const createTodolistAC = (title: string):CreateTodolistAction => {
  const newId = v1()
  return {type: 'create_todolist', payload: { id: newId, title}} as const
}

export const changeTodolistTitleAC: ChangeTodolistTitleAction = ({id, title} :{title: string, id: string}) => {
  return {type: 'change_todolist_title', payload: {id, title}} as const
}