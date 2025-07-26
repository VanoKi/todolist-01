import {taskReducer} from "./task-reducer.ts";
import {combineReducers, createStore} from "redux";
import {filterReducer} from "./filter-reducer.ts";

const rootReducer = combineReducers({
  tasks: taskReducer,
  filter: filterReducer
})

export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)