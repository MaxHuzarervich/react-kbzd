import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }

    return <><input onChange={onChange}/> - {value} </>;
}
//-----------------------------------------------------------------------
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    //с помощью хука useRef создаем ссылку
    const inputRef = useRef<HTMLInputElement>(null);
    //в коллбеке к этой ссылке обращаемся
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    //далее эту ссылку привязываем чтобы на нее ссылаться
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value} </>;
}


export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

//currentTarget тот элемент с которым происходит событие
    //закидываем в инрут пустое значение, пишем что-нибудь срабатывает подписчик,
    //мы достаем value и сетаем его в локальный стейт
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={change}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

//currentTarget тот элемент с которым происходит событие
    //закидываем в инрут пустое значение, пишем что-нибудь срабатывает подписчик,
    //мы достаем value и сетаем его в локальный стейт
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={change}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

//currentTarget тот элемент с которым происходит событие
    //закидываем в инрут пустое значение, пишем что-нибудь срабатывает подписчик,
    //мы достаем value и сетаем его в локальный стейт
    const change = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={change}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}