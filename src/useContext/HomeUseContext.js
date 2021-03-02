import React, { createContext, useState } from 'react';
import ComponentA from './ComponentA';


export const UserContaxt = createContext();
export const ChannelContext = createContext();

const HomeUseContext = () => {

    const [username, setUsername] = useState('anoopk0792')
    const [channel, setChannel] = useState('www.anooprock.com')

    return (
        <UserContaxt.Provider value={{ username }}>
            <ChannelContext.Provider value={{ channel }}>
                <ComponentA />
            </ChannelContext.Provider>
        </UserContaxt.Provider>
    );
}

export default HomeUseContext;

/**
 * to avoid, props drilling or liftingof state , we can use context API
 *
 * we can directly sent data to required component. to avoid manually drill down the props to every level.
 */
