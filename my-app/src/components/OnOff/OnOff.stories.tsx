import {Meta} from '@storybook/react';
import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action('on or off clicked');

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}
    />
}