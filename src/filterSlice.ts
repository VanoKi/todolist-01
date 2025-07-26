import {FilterType} from "./App.tsx";
import {createSlice} from "@reduxjs/toolkit";

const initialState:FilterType = 'all'
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: FilterType) => {
      return action.payload
    }
  }
})

export const {setFilter} = filterSlice.actions
export default filterSlice.reducer