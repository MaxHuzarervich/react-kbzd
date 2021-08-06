import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData(){
    return 1
}

export const Example1 = () => {
    console.log('generateData')


const [counter, setCounter] = useState(generateData);


    return <>
        <button onClick={() => setCounter(state => state +1)}>+</button>
        {counter}
    </>
}