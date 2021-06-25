import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
};
//action из сторибука выведет в консоль 'value changed'
// если вдруг коллбек будет вызван внутри компоненты select
export const WithValue = () =>
    <>
        <Select onChange={action('value changed')}
                value={'2'}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}]}/>
    </>
export const WithoutValue = () =>
    <>
        <Select onChange={action('value changed')}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}]}/>
    </>