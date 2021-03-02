import React, { createContext, useContext, useReducer } from 'react';
import ComponentA from './ComponentA';

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        default:
            return state
    }
}


export const StateContext = createContext();

const HomeContextReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StateContext.Provider value={{ state, dispatch }} >
            <ComponentA />
        </StateContext.Provider>
    );
}

export default HomeContextReducer;

/**
 * useReducer : local state management
 *
 * sharing b/w component - global state management
 *
 * useReducer + useContext => global state management (like redux)
 *
 */
