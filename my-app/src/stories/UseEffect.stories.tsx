import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {

const [fake, setFake] = useState(1);
const [counter, setCounter] = useState(1);

console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect first render and every change counter')
        document.title = counter.toString()
    },[counter]) //counter наша зависимость если не поменяется то и useEffect не будет перерисовываться

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    },[])

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    return <>
        Hello, {counter} {fake}
        <button onClick={() => { setFake( fake + 1 ) }} >+</button>
    </>
}