import React, { useMemo, useState } from 'react';

const AppCounter = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        return setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        return setCounterTwo(counterTwo + 1)
    }


    //some function tak lot of time to exec , like when calling the function to fetch data, filter the data, sorting the data etc...
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0
    }, [counterOne])

    //to tell react not o re-calc isEven function when counter is incremented.

    //useMemo :  that will only recompute the cached value, when one of the dependency have changed.this optimsation help to avoid expensive calc 
    //when is not called.


    return (
        <div>
            <p> <button onClick={incrementOne}>Increment One : {counterOne}</button> <span>{isEven ? 'Even' : 'odd'}</span></p>
            <p> <button onClick={incrementTwo}>Increment Two : {counterTwo}</button></p>
        </div>
    );
}

export default AppCounter;


/**
 * difference b/w callback and useMemo
 *
 * useCallback  caches the provide function instance it self(stored the address)
 * useMemo invoke the function and cache its result.
 *
 * if we need to cache a function use callback and when we need to cache the result of invoked function use Memo
 *
           " useCallback: Caches the provided function instance
            useMemo: Invokes the provided function & caches the result"
 *
 */