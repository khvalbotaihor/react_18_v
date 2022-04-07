import React, {useState} from 'react';
import {flushSync} from "react-dom";

const BatchingExample = () => {
    const [state, setState] = useState(0)
    const [value, setValue] = useState(0)

    console.log('RENDER')

    const update = () => {
        Promise.resolve()
            .then(() => {
                flushSync(() => {
                    setValue(prev => prev +1)

                })
                flushSync(() => {
                    setState(prev => prev +1)
                })
            })
    }

    return (
        <div>
            <h1>value = {value}</h1>
            <h1>state = {state}</h1>
            <button onClick={update}>UPDATE</button>
        </div>
    );
};

export default BatchingExample;
