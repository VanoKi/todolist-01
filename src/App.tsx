import './App.css'
import {TodolistItem} from "./components/TodolistItem.tsx";
import {useReducer, useState} from "react";
import {v1} from 'uuid'
import {CreateItemForm} from "./components/CreateItemForm.tsx";
import {
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    createTodolistAC,
    deleteTodolistAC,
    todolistReducer
} from "./model/todolist-reducer.ts";

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
    const initialState = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}]
    const [todolists, dispatchToTodolists] = useReducer(todolistReducer, initialState)
    const [tasks, setTasks] = useState<TaskState>({
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
    })

    const changeFilter = (todolistId: string, filter: FilterValues) => {
        dispatchToTodolists(changeTodolistFilterAC(todolistId, filter))
    }
    const deleteTask = (todolistId: string, taskID: string) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(task => task.id !== taskID)})
    }
    const addTask = (todolistId: string, title: string) => {
        const newTask: Task = {
            id: v1(),
            title,
            isDone: false
        }
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }
    const changeTask = (todolistId: string, taskId: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(task => task.id === taskId ? {...task, isDone: !task.isDone} : task)
        })
    }
    const deleteTodolist = (todolistId: string) => {
        dispatchToTodolists(deleteTodolistAC(todolistId))
        delete tasks[todolistId]
        setTasks({...tasks})
    }
    const createTodolist = (title: string) => {
        const newTodolist: Todolist = {
            id: v1(),
            title,
            filter: 'all'
        }
        dispatchToTodolists(createTodolistAC(title))
        setTasks({...tasks, [newTodolist.id]: []})
    }
    const changeTaskTitle = (todolistId: string, taskId: string, title: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(t => t.id === taskId
                ? {...t, title}
                : t)
        })
    }
    const changeTodolistTitle = (todolistId: string, title: string) => {
        dispatchToTodolists(changeTodolistTitleAC(todolistId, title))
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
