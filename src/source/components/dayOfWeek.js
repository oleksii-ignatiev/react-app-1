import React from 'react';
import moment from 'moment';
import cx from "classnames";

export const Day = (props) => {
    const currentDay = props.day;
        
    const dayCX = cx({
        'day': true, 
        [ currentDay.type ]: true,
        'selected': ( props.index === props.isShowing ) ? true : false
    });
    
    const toggle = (index) => props.setIsShowing(index);

    return (
        <div className={ dayCX } onClick = { () => toggle(props.index) } >
            <p>{ moment(currentDay.day).utc().format('dddd') }</p>
            <span>{ currentDay.temperature }</span>
        </div>
    );
};