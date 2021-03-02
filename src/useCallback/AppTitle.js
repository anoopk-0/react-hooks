import React, { memo } from 'react';

const AppTitle = () => {
    console.log('Render title compoenent')
    return (
        <h1>
            useCallback hook
        </h1>
    );
}

export default memo(AppTitle);
