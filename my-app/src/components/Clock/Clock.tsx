import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type propsType = {
    mode: 'digital' | 'analog'
}

export const Clock: React.FC<propsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000) //каждую сек мы будем формировать новый объект дату с которой будем работать

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date} />
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

