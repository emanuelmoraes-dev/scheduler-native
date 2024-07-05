import {useEffect, useState} from 'react'
import {format, Locale} from 'date-fns'
import {ptBR} from 'date-fns/locale'

const DEFAULT_LOCALE = ptBR
const DEFAULT_PATTERN = 'EEEE dd/MM/yyyy'

export interface DateInfoOpts {
    pattern?: string,
    locale?: Locale,

    transform?(text: string): string
}

export function useDateInfo(initialDate?: Date, opts: DateInfoOpts = {}) {
    const [date, setDate] = useState(initialDate ?? new Date())
    const [text, setText] = useState(toText(date))

    function toText(date: Date): string {
        const pattern = opts?.pattern ?? DEFAULT_PATTERN
        const formatOpts = {locale: opts.locale ?? DEFAULT_LOCALE}
        const value = format(date, pattern, formatOpts)
        if (opts.transform) {
            return opts.transform(value)
        }
        return value
    }

    useEffect(() => {
        setText(toText(date))
    }, [date])

    return {
        date,
        setDate,
        text,

        toText
    }
}
