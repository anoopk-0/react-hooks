import React from 'react';
import ClassIntervalCounter from './ClassIntervalCounter';
import ClassUpdateTitle from './ClassUpdateTitle';
import HookUpdateTitle from './HookUpdateTitle';
import HookIntervalCounter from './HookIntervalCounter';

const HomeUseEffect = () => {


    return (
        <div>
            <ClassUpdateTitle />
            <h1>Hooks</h1>
            <HookUpdateTitle />
            <h1>Class Interval Counter</h1>
            <ClassIntervalCounter />
            <h1>Hook Interval Counter</h1>
            <HookIntervalCounter />
        </div>
    );
}

export default HomeUseEffect;


/*
  updating the document title to current counter value.

  on inital rendering:

    ComponentDidMount(){
        document.title = `you clicked ${this.state.counter} times`
    }

    as ComponentDidMount run only once, we need to update the update using another lifehook

     ComponentDidUpdate (){
        document.title = `you clicked ${this.state.counter} times`
    }

    another: to unsubscribe any event , we have to use ComponentWillUnMount

    related code are placed in different code Block.


    Effect Hooks: let us perform side effect  in functional component.
                it is a close replacement of componentDidMount, componentDidUpdate and componentWillUnmount

       useEffect(() => {
                -calling api,
                -mimic ComponentDidMount
            return () => {
                **to unsubscribe or cleanup**
                  -mimic ComponentWillUnMount
            }
        }, [input])

        has a second array parament, we pass to value to keep a check on it's value changes



        #we can have multiple use effect. in a single component
*/