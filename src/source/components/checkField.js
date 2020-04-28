import React from 'react';
import cx from "classnames";

export const CheckField = (props) => {
    
    const checkCX = cx({
        'checkbox': true,
        'selected': (props.id === props.isChecked) ? true : false,
        'blocked': !props.isSubmit ? true : false
    });

    const toggle = () => {
        if (props.isSubmit) props.setIsChecked(props.id);
    }
    return (
        <span className={ checkCX } onClick = { () => toggle() } >{ props.value }</span>
    );
};