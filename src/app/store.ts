import {todolistReducer} from "../model/todolist-reducer.ts";
import {tasksReducer} from "../model/task-reducer.ts";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistReducer,
})

export const store = configureStore(
  {reducer: rootReducer}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//@ts-ignore
window.store = store