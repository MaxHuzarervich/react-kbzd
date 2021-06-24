import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string []  // массив строк!

}
export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={(e) => props.onChange()}>--{props.title}--</h3>
}

type AccordionBodyPropsType = {
    items: string []  // массив строк!
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map(i => <li>{i}</li>)}
        {/* каждый item приходит к нам сюда и вместо item возвращаю конкретную li-шку!
        Значение item зарисуем в конкротной li-шке*/}
    </ul>

}

