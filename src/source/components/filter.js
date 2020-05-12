import React from 'react';

import { CheckField } from './checkField';
import { Temperature } from './temperatureField';

import { store } from '../init/store';
import { useDispatch } from 'react-redux';
import { forcastActions } from '../actions';

export const Filter = (props) => {
    const forcast = store.getState().forcast;
    const dispatch = useDispatch();
    
    const submit = () => {
        if (forcast.isSubmit) {
            let filtered = forcast.range;
            
            if (forcast.isChecked) filtered = filtered.filter( (e) => e.type === forcast.isChecked );
            if (forcast.maxTemp) filtered = filtered.filter( (e) => e.temperature <= forcast.maxTemp );
            if (forcast.minTemp) filtered = filtered.filter( (e) => e.temperature >= forcast.minTemp );
            
            props.setfilteredForcast(filtered);
            props.setIsfiltered(1);
            
            dispatch(forcastActions.setIsSubmit(!forcast.isSubmit));
            dispatch(forcastActions.setButtonValue('Сбросить'));
            
        } else {
            dispatch(forcastActions.fetchAsync(14));
            props.setIsfiltered(0);
        }
    }
    
    return (
        <div className="filter">
            <CheckField
                forcast = { forcast } 
                id = "cloudy" 
                value = "Облачно"
            />
            <CheckField
                forcast = { forcast }
                id = "sunny" 
                value = "Солнечно"
            />
            <CheckField
                forcast = { forcast }
                id = "rainy" 
                value = "Пасмурно"
            />
            <Temperature 
                forcast = { forcast }
                label = "Минимальная температура" 
                id = "min-temperature"
            />
            <Temperature 
                forcast = { forcast }
                label = "Максимальная температура" 
                id = "max-temperature"
            />
            
            <button disabled = { !(forcast.isChecked || forcast.minTemp || forcast.maxTemp) } onClick = { submit } >{ forcast.buttonValue }</button>
        </div>
    );
};