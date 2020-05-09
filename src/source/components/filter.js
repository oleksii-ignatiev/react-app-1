import React from 'react';

import { CheckField } from './checkField';
import { Temperature } from './temperatureField';

import { store } from '../init/store';
import { useDispatch } from 'react-redux';
import { forcastActions } from '../actions';

export const Filter = (props) => {
    const state = store.getState().forcast;
    const dispatch = useDispatch();
    
    const submit = () => {
        if (state.isSubmit) {
            let filtered = store.getState().forcast.range;
            
            if (state.isChecked) filtered = filtered.filter( (e) => e.type === state.isChecked );
            if (state.maxTemp) filtered = filtered.filter( (e) => e.temperature <= state.maxTemp );
            if (state.minTemp) filtered = filtered.filter( (e) => e.temperature >= state.minTemp );
            
            props.setfilteredForcast(filtered);
            props.setIsfiltered(1);
            
            dispatch(forcastActions.setIsSubmit(!state.isSubmit));
            dispatch(forcastActions.setButtonValue('Сбросить'));
            
        } else {
            dispatch(forcastActions.fetchAsync(14));
            props.setIsfiltered(0);
        }
    }
    
    return (
        <div className="filter">
            <CheckField
                state = { state } 
                id = "cloudy" 
                value = "Облачно"
            />
            <CheckField
                state = { state }
                id = "sunny" 
                value = "Солнечно"
            />
            <CheckField
                state = { state }
                id = "rainy" 
                value = "Пасмурно"
            />
            <Temperature 
                state = { state }
                label = "Минимальная температура" 
                id = "min-temperature"
            />
            <Temperature 
                state = { state }
                label = "Максимальная температура" 
                id = "max-temperature"
            />
            
            <button disabled = { !(state.isChecked || state.minTemp || state.maxTemp) } onClick = { submit } >{ state.buttonValue }</button>
        </div>
    );
};