import React, { useEffect, useState } from 'react';

const HookUpdateTitle = () => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    //useEffect run after very render of the component
    useEffect(() => {


        //here we don't have to check for if condition, whatever is there in depenency array, will run the componentDIDUpdate
        console.log('updating doc title')
        document.title = `Clicked ${counter} times`;

        //if we don't put dependancy array, it will re-render the component with name propty change
    }, [counter]);

    //effect only run, when the dependancy value changes

    return (
        <div>
            <button onClick={() => setCounter((pState) => (pState + 1))}>
                Increment Counter - {counter}
            </button >
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}

export default HookUpdateTitle;
