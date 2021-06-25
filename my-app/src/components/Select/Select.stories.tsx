import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

 export default {
    title: 'Select',
    component: Select
};
                                   //action из сторибука выведет в консоль 'value changed'
                                  // если вдруг коллбек будет вызван внутри компоненты select
export const EmptyRating = () => <Select onChange={action('value changed')}/>