import {FilterType} from "./App.tsx";

const initialFilter:FilterType = 'all'
type Actions = {type: 'SET_FILTER', filter: FilterType}

export const filterReducer = (state:FilterType = initialFilter, actions:Actions):FilterType => {
  switch (actions.type) {
    case 'SET_FILTER':
      return actions.filter
    default: return state
  }
}

export const setFilterAC = (filter: FilterType):Actions => {
  return {type: 'SET_FILTER', filter}
}

