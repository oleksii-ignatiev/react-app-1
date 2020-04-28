import React from 'react';
import moment from 'moment';

export const Day = (props) => {
    const theDay = Object(props.currentDay[props.isShowing]);
    
    return (Object.keys(theDay).length !== 0) ? (
        <>
            <div className="head">
                <div className="icon cloudy"></div>
                <div className="current-date">
                    <p>{ moment(theDay.day).utc().format('dddd') }</p>
                    <span>{ moment(theDay.day).utc().format('DD MMMM') }</span>
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