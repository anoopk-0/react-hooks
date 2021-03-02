import React, { memo } from 'react';

const AppCount = ({ count, text }) => {
    console.log(`rendering ${text}`)
    return (
        <div>
            {text} == {count}
        </div>
    );
}

export default memo(AppCount);
