import React, {useEffect, useState} from "react";

type propsType = {
    mode: 'digital' | 'analog'
}

const get2digitString = (num: number) => num < 10 ? '0' + num : num

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

type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span> {get2digitString(date.getHours())} </span>
        :
        <span> {get2digitString(date.getMinutes())} </span>
        :
        <span> {get2digitString(date.getSeconds())} </span>
    </>
}

export const AnalogClockView: React.FC<ClockViewPropsType> = () => {
return <span> ANALOG </span>
}