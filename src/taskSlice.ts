import {Task} from "./App.tsx";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const v1 = () => crypto.randomUUID()

const initialState: Task[] = [
  { id: v1(), title: 'HTML&CSS', isDone: true },
  { id: v1(), title: 'JS', isDone: true },
  { id: v1(), title: 'ReactJS', isDone: false },
]

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action:PayloadAction<string>) {
      state.unshift({id:v1(), title: action.payload, isDone: false})
    },
    removeTask(state, action:PayloadAction<string>) {
      return state.filter(t => t.id !== action.payload)
    },
    changeStatus(state, action:PayloadAction<string>) {
      const task = state.find(t => t.id === action.payload)
      if (task) {
        task.isDone = !task.isDone
      }
    }
  }
})

export const {addTask, removeTask, changeStatus} = taskSlice.actions
export default taskSlice.reducer