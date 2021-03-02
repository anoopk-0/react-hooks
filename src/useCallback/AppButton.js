import React, { memo } from 'react';

const AppButton = ({ children, handleClick }) => {

    console.log(`rendering button ${children}`)

    return <button onClick={handleClick}>{children}</button>
}

export default memo(AppButton);
