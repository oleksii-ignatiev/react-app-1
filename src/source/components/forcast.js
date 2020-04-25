import React from 'react';
import { Day } from './dayOfWeek';

export const Forcast = (props) => {
    
const week = props.range.slice(0,7);

    return (
        <div className="forecast">
            { week.map( (day, index) => <Day key = { day.day } day = {day} index = {index} setIsShowing = { props.setIsShowing } isShowing = { props.isShowing }/> ) }
        </div>
    );
};