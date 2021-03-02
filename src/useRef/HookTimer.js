import React, { useEffect, useState, useRef } from 'react';

const HookTimer = () => {

    const [timer, setTimer] = useState(0);

    //useRef can also store any mutable value. the value will persist through re-render and also don't cause extra re-rendering

    const inervalRef = useRef()

    useEffect(() => {

        inervalRef.current = setInterval(() => setTimer((preState) => preState + 1), 1000)

        return () => {
            clearInterval(inervalRef.current)
        }
    }, [timer])

    return (
        <div>
            Timer: {timer}
            <button onClick={() => clearInterval(inervalRef.current)}>clear hook timer</button>
        </div>
    );
}

export default HookTimer;
