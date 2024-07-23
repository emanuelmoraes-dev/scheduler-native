import {useEffect, useState} from 'react'

export interface Grouped<T> {
    data: T[]
    group: string
}

export interface GroupedOptions<T> {
    getGroup(v: T): string

    filter?: string
    getFilter?(value: T, index: number, array: T[]): string
}

export function useGroupBy<T>(list: T[], options: GroupedOptions<T>): Grouped<T>[] {
    const [groupedList, setGroupedList] = useState<Grouped<T>[]>([])

    const deps: unknown[] = [list]
    if (options.filter) {
        deps.push(options.filter)
    }
    useEffect(() => {
        let newList: T[] = list

        if (options.filter && options.getFilter) {
            newList = newList.filter((value, index, array) => options.getFilter!(value, index, array) === options.filter)
        }

        const newGroupedList: Grouped<T>[] = newList
            .map(v => ({
                data: [v],
                group: options.getGroup(v)
            }))
            .sort((v1, v2) => v1.group.localeCompare(v2.group))
            .reduce((acc, grouped) => {
                if (!acc.length || acc[acc.length - 1].group !== grouped.group) {
                    acc.push(grouped)
                    return acc
                }

                acc[acc.length - 1].data.push(grouped.data[0])
                return acc
            }, [] as Grouped<T>[])

        setGroupedList(newGroupedList)
    }, deps)

    return groupedList
}
