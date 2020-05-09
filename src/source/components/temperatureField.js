import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { forcastActions } from '../actions';


export const Temperature = (props) => {
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();
    
    const handleChange = (id, event) => {
        (id === 'min-temperature') ? dispatch(forcastActions.setMinTemp(event.target.value)) : dispatch(forcastActions.setMaxTemp(event.target.value));
        setIsError(event.target.value && !event.target.value.match(/^[0-9]+[.,]?[0-9]*$/gi));
    }

    return (
        <p className="custom-input">
            <label htmlFor = { props.id }>{ props.label }</label>
            <input id = { props.id } type="text" value = { props.id === 'min-temperature' ? props.state.minTemp : props.state.maxTemp } disabled = { !props.state.isSubmit } onChange = { (event) => handleChange( props.id, event) }/>
            { isError && <span>Should ba a number with "." or "," decimal deviders</span> }
        </p>
    );
};