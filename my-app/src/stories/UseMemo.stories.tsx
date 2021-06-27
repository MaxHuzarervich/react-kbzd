import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => { //useMemo вычисли эти вычисления и запомни их, до тех пор пока "а" не поменяется
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {    //расчет факториала числа a
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]) //2-м параметром принимает те самые зависимости,
    // на которые useMemo будет обращать внимание, чтобы перезапускать эту ф-цию или нет.
    // Если а не поменялось, то не нужно вызывать этот коллбек


    for (let i = 1; i <= b; i++) {    //расчет факториала числа b
        resultB = resultB * i;
    }

    return <>
        <input value={a}
               onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b}   //приведение типа ( + и Number одно и то же )
               onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}