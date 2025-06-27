import {Todolist} from "../App.tsx";

const initialState: Todolist[] = []
export const todolistReducer = (state: Todolist[] = initialState, action):Todolist[] => {
  switch (action.type) {
    case 'delete_todolist' : {
      return state
    }
    default: return state
  }
}

type Actions = {
  type: string
  payload: any
}