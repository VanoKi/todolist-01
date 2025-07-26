import taskReducer from "./taskSlice.ts";
import filterReducer from "./filterSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer
  }
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch