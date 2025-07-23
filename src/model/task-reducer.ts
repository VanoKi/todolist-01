import {Task} from "../App.tsx";

const initialState:Task[] = []
const Action = 'REMOVE_TASK' | 'ADD_TASK' | 'CHANGE_TASK' | 'CHANGE_FILTER'

export const taskReducer = (state = initialState, actioin) => {
  switch (actioin.type) {
    case 'REMOVE_TASK': {
      return state.filter((task) => task.id !== actioin.id)
    }
    case 'ADD_TASK': {
      const newTask = {id: crypto.randomUUID(), title: actioin.title, isDone: false}
      return {newTask, ...state}
    }
    case 'CHANGE_TASK': {
      return state.map(task => task.id === actioin.id ? {...task, isDone: !task.isDone} : task)
    }
    // case 'CHANGE_FILTER': {
    //   return
    // }
    default:
      return state
  }
}