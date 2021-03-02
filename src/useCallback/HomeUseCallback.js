import React, { useState, useCallback } from 'react';
import AppTitle from './AppTitle';
import AppCount from './AppCount';
import AppButton from './AppButton';

const HomeUseCallback = () => {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);

    const incrementAge = useCallback(() => setAge(age + 1), [age])
    const incrementSalary = useCallback(() => setSalary(salary + 10000), [salary])

    return (
        <div>
            <AppTitle />
            <AppCount text="Age" count={age} />
            <AppButton handleClick={incrementAge}>Increment Age</AppButton>
            <hr></hr>
            <AppCount text="Salary" count={salary} />
            <AppButton handleClick={incrementSalary}>Increment Salary</AppButton>
        </div>
    );
}

export default HomeUseCallback;

/*
memo : using memo render the component , when there is change in it's props or state.

even after using memo , button for both age and salary get re-render.

reason: a new increment salary func is created , each time when parent component re-render. and when dealing with function
we always have to consider refernce equality(address of function allocted in the memory).even though the function has exect same
behvaiour that don't mean they are equal to each other.so the function before and after the re-render are different.
and since the function is a prop. memo sees that the props have changed and will not prevent the re-render.

to tell the react that there is no need to create the salary increment function when we update the age. we use (useCallback) hook

useCallback : a hook that will return a memozied version of the callback function that only chnages if one of the dependencies has change

it means : it will cache the function , and return the same fucntion if is (dependend)value is not change

why : it is usefull when passing callback to optimise child component that they rely on reference quality to prevent unnecessary renders.

*/
