import React, { useContext } from 'react';
import { StateContext } from './HomeContextReducer';

const ComponentC = () => {
    const { state, dispatch } = useContext(StateContext);

    return (
        <div>
            <h1>compoent C counter : {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        </div>
    );
}

export default ComponentC;
