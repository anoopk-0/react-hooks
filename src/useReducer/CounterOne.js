import React, { useReducer, useState } from 'react';

const initialState = 0;

//except the current state and retun the new state
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

const CounterOne = () => {

    // const [count, setCount] = useState(0);


    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1> count: {state}</h1>
            <p><button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button></p>
            <p><button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button></p>
            <p><button onClick={() => dispatch({ type: 'RESET' })}>reset</button></p>
        </div>
    );
}

export default CounterOne;

/**
 * WE CAN HAVE MULTIPAL USEREDUCER.
 */
