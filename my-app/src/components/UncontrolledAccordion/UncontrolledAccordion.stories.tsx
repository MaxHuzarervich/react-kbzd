import {Meta} from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action('accordion mode change event fired');

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Menu'} />

}