import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const HelpsForReactMemoExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => { //useMemo вычисли эти вычисления и запомни их, до тех пор пока "а" не поменяется.
        // Если "а" поменяется запускай еще раз эту ф-цию.
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {    //расчет факториала числа a
            let fake = 0;
            while (fake < 1000) { //пример: для увеличения времени загрузки
                fake++;
                const fakeValue = Math.random();
            }
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

//--------------------------------------------------------------------

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users Secret')
    //отрисовка списка users
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret); //скармливаем мемо свою компоненту,
// а она выплевывает нам контейнерную компоненту,
// которая проверяет если поменялись входные пропсы то вызывает UsersSecret.

export const HelpsToReactMemo = () => {
    console.log('ExaHelpsToReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem']);

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users]); //users - наша зависимость
    //users у которых есть буква 'a'
    //метод filter создает новый массив
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers);
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}