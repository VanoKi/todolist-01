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
    default: return state
  }
}

export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>

type Actions = DeleteTodolistAction | CreateTodolistAction

export const deleteTodolistAC = (id: string):DeleteTodolistAction => {
  return {type: 'delete_todolist', payload: {id}} as const
}

export const createTodolistAC = (title: string):CreateTodolistAction => {
  const newId = v1()
  return {type: 'create_todolist', payload: { id: newId, title}} as const
}