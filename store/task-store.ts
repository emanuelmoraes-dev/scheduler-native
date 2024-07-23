import {DATE_FORMAT, TaskData} from '@/data/task-data'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {addDays, format, set} from 'date-fns'

const FIRST_DATE = new Date()

export type TaskState = {data: TaskData[]}

export const taskStore = createSlice({
    name: 'task',
    initialState: {data: [
        {title: 'I did it!', date: format(set(FIRST_DATE, {hours: 10, minutes: 30}), DATE_FORMAT)},
        {title: 'I Did it Again!', date: format(set(FIRST_DATE, {hours: 13}), DATE_FORMAT)},
        {title: 'I Will Do it Again Tomorow!', date: format(set(addDays(FIRST_DATE, 1), {hours: 17}), DATE_FORMAT)}
    ]} as TaskState,
    reducers: {
        addTask(state, action: PayloadAction<TaskData>): TaskState {
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }
    }
})

export const {addTask} = taskStore.actions
