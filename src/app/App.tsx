import './App.css'
import {TodolistItem} from "../components/TodolistItem.tsx";
import {useReducer} from "react";
import {v1} from 'uuid'
import {CreateItemForm} from "../components/CreateItemForm.tsx";
import {
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    createTodolistAC,
    deleteTodolistAC,
    todolistReducer
} from "../model/todolist-reducer.ts";
import {changeTaskStatusAC, changeTaskTitleAC, createTaskAC, deleteTaskAC, tasksReducer} from "../model/task-reducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/query";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {useAppSelectors} from "../common/hooks/useAppSelectors.ts";
import {selectTodolists} from "../model/todolists-selectors.ts";
import {selectTaks} from "../model/tasks-selesctors.ts";

export type FilterValues = 'all' | 'active' | 'completed'
export type Task = {
    id: string
    title: string
    isDone: boolean
}
export type Todolist = {
    id: string
    title: string
    filter: FilterValues
}
export type TaskState = {
    [key: string]: Task[]
}

function App() {
    const todolistId1 = v1()
    const todolistId2 = v1()
    const initialState:Todolist[] = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]
    const todolists = useAppSelectors(selectTodolists)
    const initialTasks = {
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
    }
    const tasks = useAppSelectors(selectTaks)
    const dispatch = useAppDispatch()

    const changeFilter = (todolistId: string, filter: FilterValues) => {
        dispatch(changeTodolistFilterAC(todolistId, filter))
        // dispatchToTodolists({type: 'change_filter_a', payload: {id: todolistId, filter}})
    }
    const deleteTask = (todolistId: string, taskId: string) => {
        dispatch(deleteTaskAC({id: todolistId, taskId}))
    }
    const addTask = (todolistId: string, title: string) => {
        dispatch(createTaskAC({id: todolistId, title}))
    }
    const changeTask = (todolistId: string, taskId: string, status:boolean) => {
        dispatch(changeTaskStatusAC({id: todolistId, taskId, status}))
    }
    const deleteTodolist = (todolistId: string) => {
        dispatch(deleteTodolistAC({id: todolistId}))
    }
    const createTodolist = (title: string) => {
        dispatch(createTodolistAC(title))
    }
    const changeTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatch(changeTaskTitleAC({id: todolistId, taskId, title}))
    }
    const changeTodolistTitle = (todolistId: string, title: string) => {
        dispatch(changeTodolistTitleAC({id: todolistId, title}))
    }

    return (
        <div className="app">
            <CreateItemForm addItem={createTodolist}/>
            {todolists.map(tl => {
                let filteredTasks = tasks[tl.id]
                let filter = tl.filter
                if (filter === 'active') {
                    filteredTasks = tasks[tl.id].filter(task => !task.isDone)
                } else if (filter === 'completed') {
                    filteredTasks = tasks[tl.id].filter(task => task.isDone)
                }
                return (
                    <TodolistItem
                        key={tl.id}
                        todolist={tl}
                        tasks={filteredTasks}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTask={changeTask}
                        deleteTodolist={deleteTodolist}
                        changeTaskTitle={changeTaskTitle}
                        changeTodolistTitle={changeTodolistTitle}
                    />
                )
            })}
        </div>
    )
}

export default App
