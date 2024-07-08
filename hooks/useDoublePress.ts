import {useRef} from 'react'

const DEFAULT_MAX_TIME_DIFF = 400

export function useDoublePress() {
    const doublePressLastTime = useRef(0)
    function handleDoublePress<T>(handler: (e?: T) => void, maxTimeDiff: number = DEFAULT_MAX_TIME_DIFF): (e?: T) => void {
        return (e?: T) => {
            const now = Date.now()
            const diff = now - doublePressLastTime.current
            if (diff < maxTimeDiff) {
                handler(e)
            }
            doublePressLastTime.current = now
        }
    }
    return handleDoublePress
}
