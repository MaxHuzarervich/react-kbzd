import React, {useCallback, useMemo, useState} from "react";

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

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);//
    // Lexical Env 4 books Лексическое окружение, умирает после отрабатывания ф-ции до конца.
    // Но оно не умирает если есть какае-то внутрення ф-ция, которая продолжает жить и которая
    // использует значения не из своего лексического окружения а из окружения снаружи
    // addBook использует книги используемые снаружи!!!


    const memoizedAddBook = useMemo(() => {
            return () => {
                const newUsers = [...books, 'Angular' + new Date().getTime()]
                setBooks(newUsers)
            }//lexical env ф-ции addBook это newUsers
        }, [books]
    );//мемоизируем ф-цию addBook,
    // с зависимостью books. Запомни ее пока у тебя не изменится объект books.
    // Если изменится перезатри, то запомнил тогда

    const memoizedAddBook2 = useCallback(() => {//запомни эту ф-циюю
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)//lexical env ф-ции addBook это newUsers
        }, [books]
    );

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret')
    //отрисовка списка users
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret);//мы засунули в мемо одну компоненту,
// а она нам выплюнула контейнерную, которая следит за пропсами
