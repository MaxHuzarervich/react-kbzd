import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    // let [collapsed, setCollapsed] = useState(false)

    let [state, dispatch] = useReducer(reducer, {collapsed: false})//стартовое значение false

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}

        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: 'TOGGLE-COLLAPSED'})
        }}/>
        {/*при нажатии на кнопку AccordionTitle мы диспатчим инструкцию,dispatch - ф-ция которая вылезла из usereducer
        c помощью которого реакт позволяет нам отправлять эти команды action чтобы можно было преобразовать state*/}
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {
        props.onClick()
    }}>--{props.title}--</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

export default UncontrolledAccordion;