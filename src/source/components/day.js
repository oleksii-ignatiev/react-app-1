import React from 'react';
import { momentutc } from '../init/moment';

export const Day = (props) => {
    const theDay = Object(props.currentDay[props.isShowing]);
    
    return ( theDay.day ) ? (
        <>
            <div className="head">
                <div className="icon cloudy"></div>
                <div className="current-date">
                    <p>{ momentutc(theDay.day).format('dddd') }</p>
                    <span>{ momentutc(theDay.day).format('DD MMMM') }</span>
                </div>
            </div>
            <div className="current-weather">
                <p className="temperature">{ theDay.temperature }</p>
                <p className="meta">
                    <span className="rainy">%{ theDay.rain_probability }</span>
                    <span className="humidity">%{ theDay.humidity }</span>
                </p>
            </div>
        </>
    ) : (<></>)
};