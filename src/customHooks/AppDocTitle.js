import React, { useEffect, useState } from 'react';

const AppDocTitle = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `count is ${count}`
    }, [count])

    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        </div>
    );
}

export default AppDocTitle;
