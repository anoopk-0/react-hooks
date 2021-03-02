import React, { useEffect, useState } from 'react';

const HookIntervalCounter = () => {

    const [count, setCount] = useState(0);

    const tick = () => {
        //    setCount((preState) => (preState + 1)) : work without dependency list 
        setCount(count + 1); // have to have dependancy to watch te chaning parameter
    }

    useEffect(() => {

        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count]);


    return (
        <h1 style={{ color: 'red' }}>{count}</h1>
    );
}

export default HookIntervalCounter;
