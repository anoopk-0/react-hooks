import React from 'react';
import CounterOne from './CounterOne';

const HomeUseReducer = () => {
    return (
        <div>
            <CounterOne />
        </div>
    );
}

export default HomeUseReducer;

/*
    useReducer: is it a hook for state management.it is a kind of alternative for useState.

    b/w

    when working which simple primitive data, use useState and working with array or object we can use useReducer.
    it work same as redux. and make alot moving part update , at a central repositroy.

    it kind of redux without redux library


    **and also avoid mergining of state , in case object used in useState**

*/
