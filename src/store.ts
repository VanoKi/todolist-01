import {taskReducer} from "./task-reducer.ts";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
  tasks: taskReducer
})

export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)