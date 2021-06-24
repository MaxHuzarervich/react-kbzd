import {Meta} from '@storybook/react';
import {Accordion} from "./Accordion";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

export const MenuCollapsedMode = () =>
    <Accordion items={[]} titleValue={'Menu'} collapsed={true} onChange={callback} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () =>
    <Accordion titleValue={'Users'}
               collapsed={false}
               onChange={callback}
               items={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2},
                   {title: 'Victor', value: 3}, {title: 'Artem', value: 4}]}
               onClick={onClickCallback}/>
//--------------------------------------------------------
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        //если по одному из этих элементов кликнут,я вызову коллбек который вы передадите мне в пропсы
        items={[{title: 'Dima', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Victor', value: 3},
            {title: 'Artem', value: 4}]}
        onClick={(value) => {
            alert('user with ID ${value} should be happy')
        }}/>

}