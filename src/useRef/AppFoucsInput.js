import React, { useEffect, useRef } from 'react';

const AppFoucsInput = () => {

    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef)
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default AppFoucsInput;
