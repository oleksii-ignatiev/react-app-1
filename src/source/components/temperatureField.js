import React from 'react';

export const Temperature = (props) => {
    
    const handleChange = (event) => {
        event.target.value ? props.setIsTemperature(1) : props.setIsTemperature(0);
        props.setMinTemp ? props.setMinTemp(event.target.value) : props.setMaxTemp(event.target.value);
    }

    return (
        <p className="custom-input">
            <label htmlFor = { props.id }>{ props.label }</label>
            <input id = { props.id } type="text" value = { props.minTemp ? props.minTemp : props.maxTemp ? props.maxTemp : '' } disabled = { !props.isSubmit } onChange = { handleChange }/>
        </p>
    );
};