import React, { useContext } from 'react';
import ComponentB from './ComponentB';
import { StateContext } from './HomeContextReducer';

const ComponentA = () => {

    const { state } = useContext(StateContext);

    return (
        <div>
            <h1>compoent A counter : {state.count} </h1>
            <ComponentB />
        </div>
    );
}

export default ComponentA;
