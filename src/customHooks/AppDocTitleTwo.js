import React from 'react';
import useCounter from './useCounter';

const AppDocTitleTwo = () => {

    const [incrementCount] = useCounter()

    return (
        <button onClick={incrementCount}>Increment title 2</button>
    );
}

export default AppDocTitleTwo;
