import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export function useCurrentTime() {
    const [time, setTime] = useState(dayjs().format('h:mma'));
    
    useEffect(() => {

        setInterval(() => {
        setTime(dayjs().format('h:mma'));
    },1000);

    },[]);
    
    return time;
}