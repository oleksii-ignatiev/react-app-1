import React, { useState } from 'react';

import { CheckField } from './checkField';
import { Temperature } from './temperatureField';
import { store } from '../init/store';

export const Filter = (props) => {
    const [isChecked, setIsChecked] = useState('');
    const [maxTemp, setMaxTemp] = useState(null);
    const [minTemp, setMinTemp] = useState(null);
    const [isTemperature, setIsTemperature] = useState(0);
    const [isSubmit, setIsSubmit] = useState(true);
    const [buttonValue, setButtonValue] = useState('Отфильтровать');
    
    const submit = () => {
        if (isSubmit) {
            let filtered = store.getState().forcast.range;
            
            if (isChecked) filtered = filtered.filter( (e) => e.type === isChecked );
            if (maxTemp) filtered = filtered.filter( (e) => e.temperature <= maxTemp );
            if (minTemp) filtered = filtered.filter( (e) => e.temperature >= minTemp );
            
            props.setfilteredForcast(filtered);

            props.setIsfiltered(1);
            setIsSubmit(!isSubmit);
            setButtonValue('Сбросить'); 
        } else {
            props.setIsfiltered(0);
            setIsSubmit(!isSubmit);
            setIsChecked('');
            setIsTemperature(0);
            setMinTemp(null);
            setMaxTemp(null);
            setButtonValue('Фильтровать');
        }
    }
    
    return (
        <div className="filter">
            <CheckField 
                isChecked = { isChecked } 
                setIsChecked = { setIsChecked } 
                isSubmit = { isSubmit } 
                id = "cloudy" 
                value = "Облачно"
            />
            <CheckField 
                isChecked = { isChecked } 
                setIsChecked = { setIsChecked } 
                isSubmit = { isSubmit } 
                id = "sunny" 
                value = "Солнечно"
            />
            <CheckField 
                isChecked = { isChecked } 
                setIsChecked = { setIsChecked } 
                isSubmit = { isSubmit } 
                id = "rainy" 
                value = "Пасмурно"
            />
            <Temperature 
                isSubmit = { isSubmit }
                isTemperature = { isTemperature }
                setIsTemperature = { setIsTemperature } 
                minTemp = { minTemp }
                setMinTemp = { setMinTemp }
                label = "Минимальная температура" 
                id = "min-temperature"
            />
            <Temperature 
                isSubmit = { isSubmit } 
                isTemperature = { isTemperature } 
                setIsTemperature = { setIsTemperature } 
                maxTemp = { maxTemp } 
                setMaxTemp = { setMaxTemp } 
                label = "Максимальная температура" 
                id = "max-temperature"
            />
            
            <button disabled = { !isChecked && !isTemperature } onClick = { submit } >{ buttonValue }</button>
        </div>
    );
};