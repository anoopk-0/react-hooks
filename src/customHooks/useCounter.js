import React, { useEffect, useState } from 'react';

const useCounter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `count is ${count}`
    }, [count]);

    const incrementCount = () => setCount(count => count + 1)

    return [incrementCount]
}

export default useCounter;
