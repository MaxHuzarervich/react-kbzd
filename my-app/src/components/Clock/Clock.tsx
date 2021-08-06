import React, {useEffect, useState} from "react";

type propsType = {}


export const Clock: React.FC<propsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000) //каждую сек мы будем формировать новый объект дату с которой будем работать
    }, [])

    return <div>
        <span> {date.getHours()} </span>
        :
        <span> {date.getMinutes()} </span>
        :
        <span> {date.getSeconds()} </span>
    </div>
}