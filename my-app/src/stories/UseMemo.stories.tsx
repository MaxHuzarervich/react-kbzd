import React, {useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {

const [a, setA] = useState<number>(0)
const [b, setB] = useState<number>(0)

    return <>
    <input value={a}
           onChange={(e) => setA(Number(e.currentTarget.value))}/>
    <input value={b}   //приведение типа ( + и Number одно и то же )
           onChange={(e) => setB(+e.currentTarget.value)}/>
    </>
}