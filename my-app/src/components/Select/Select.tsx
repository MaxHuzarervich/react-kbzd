import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any,
    onChange: (value: any) => void
    items: ItemType []  // массив строк!
};

export function Select(props: RatingPropsType) {
    console.log('Rating rendering')

    return (<div>
        <div>{}</div>
        {props.items.map(i => <div>{i.title}</div>)}
    </div>)}