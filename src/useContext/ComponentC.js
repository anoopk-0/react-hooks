import React from 'react';
import { ChannelContext, UserContaxt } from './HomeUseContext';

const ComponentC = () => {
    return (
        <div>
            <UserContaxt.Consumer>
                {
                    ({ username }) => {
                        return (
                            //first return
                            <ChannelContext.Consumer>
                                {
                                    ({ channel }) => {
                                        //last retrun
                                        return (
                                            <ul>
                                                <li>usename: {username}</li>
                                                <li>channel: {channel}</li>
                                            </ul>
                                        )
                                    }
                                }

                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContaxt.Consumer>
        </div>
    );
}

export default ComponentC;
