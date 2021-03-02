import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { ChannelContext, UserContaxt } from './HomeUseContext';

const ComponentB = () => {

    //with look, we can get ride of ugly , inherited loooking code.
    const { username } = useContext(UserContaxt);
    const { channel } = useContext(ChannelContext);

    return (
        <div>
            <ComponentC />
            <ul>
                <li>usename: {username}</li>
                <li>channel: {channel}</li>
            </ul>
        </div>
    );
}

export default ComponentB;
