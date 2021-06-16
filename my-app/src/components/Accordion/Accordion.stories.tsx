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

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Menu'} collapsed={true} onChange={() => setValue(!value)}/>

}