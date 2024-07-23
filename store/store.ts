import {configureStore} from '@reduxjs/toolkit'
import {TaskState, taskStore} from './task-store'

export type StoreState = {task: TaskState}

export const store = configureStore<StoreState>({
    reducer: {
        task: taskStore.reducer
    }
})

export const selectTask = (state: StoreState) => state.task
