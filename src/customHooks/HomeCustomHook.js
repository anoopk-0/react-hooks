import React from 'react';
import AppDocTitle from './AppDocTitle';
import AppDocTitleTwo from './AppDocTitleTwo';

const HomeCustomHook = () => {
    return (
        <div>
            <AppDocTitle />
            <hr />
            <AppDocTitleTwo />
        </div>
    );
}

export default HomeCustomHook;

/**
 * a custom hook is baically a javaScript function whose name start with 'use'
 * custom hook can use other hooks if required.
 *
 *
 * custom hooks are used to shair logic b/w 2 or more component.
 * alternative : render props and HOC.
 *
 */
