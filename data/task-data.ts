import {isMatch} from 'date-fns'
import {z} from 'zod'

export const DATE_FORMAT = 'dd/MM/yyyy HH:mm'

export const TaskSchema = z.object({
    title: z.string().trim().min(1),
    date: z.string().refine(value => isMatch(value, DATE_FORMAT))
})
export type TaskData = z.input<typeof TaskSchema>
