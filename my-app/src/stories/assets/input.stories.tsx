import React, {useState} from 'react';

export default {
  title: 'input',
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
  const [value,setValue] = useState('');
  return <><input onChange={(e) => {
  const actualValue = e.currentTarget.value;
  setValue(actualValue);
  }}/> - {value} </>;
}


