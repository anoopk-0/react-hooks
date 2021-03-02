import React, { useState } from 'react';

const HookCounter = () => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount((preState, props) => preState + 1);
    }


    return (
        <div>
            Count: {count}
            <button onClick={incrementCount}>incrementCount</button>
        </div>
    );
}

export default HookCounter;


/*
useState is a Hook that lets you add React state to function components

useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

The only argument to the useState() Hook is the initial state
    it can be number/string/object/array. Unlike with classes, the state doesn’t have to be an object.

What does useState return? It returns a pair of values: the current state and a function that updates it.
*/
