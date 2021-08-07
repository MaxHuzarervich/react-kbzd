import React from "react";
import {ClockViewPropsType} from "./Clock";

export const get2digitString = (num: number) => num < 10 ? '0' + num : num


export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span> {get2digitString(date.getHours())} </span>
        :
        <span> {get2digitString(date.getMinutes())} </span>
        :
        <span> {get2digitString(date.getSeconds())} </span>
    </>
}