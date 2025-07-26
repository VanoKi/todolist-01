import {taskReducer} from "./task-reducer.ts";
import {filterReducer} from "./filter-reducer.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer
  }
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch