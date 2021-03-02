import React from 'react';
import AppFoucsInput from './AppFoucsInput';
import ClassTimer from './ClassTimer';
import HookTimer from './HookTimer';

const HomeUseRef = () => {
    return (
        <div>
            <AppFoucsInput />
            <hr />
            <ClassTimer />
            <hr />
            <HookTimer />
        </div>
    );
}

export default HomeUseRef;

/**
 * useRef:  make it possible to access DOM node directly , within Functional component.
 *
 *
 */
