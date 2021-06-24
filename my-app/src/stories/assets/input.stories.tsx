import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'input',
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
  const [value,setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const actualValue = e.currentTarget.value;
    setValue(actualValue);
  }

  return <><input onChange={onChange}/> - {value} </>;
}
//-----------------------------------------------------------------------
export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value,setValue] = useState('');
  //с помощью хука useRef создаем ссылку
  const inputRef = useRef<HTMLInputElement>(null);
  //в коллбеке к этой ссылке обращаемся
  const save = ()=>
  {const el = inputRef.current as HTMLInputElement;
    setValue(el.value)}
 //далее эту ссылку привязываем чтобы на нее ссылаться
  return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value} </>;
}


