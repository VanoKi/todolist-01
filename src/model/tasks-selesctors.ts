import {RootState} from "../app/store.ts";
import {TaskState} from "../app/App.tsx";

export const selectTaks = (state:RootState):TaskState => state.tasks