import {useState} from "react";
import React from "react";
import {log} from "util";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return<div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret); //скармливаем мемо свою компоненту

export const Example1 = () => {
    console.log('Example1')
    const[counter,setCounter] = useState(0);
    const[users,setUsers] = useState(['Dima', 'Valera', 'Artem']);

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users} />
               </>
}