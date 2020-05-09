import { types } from './types';
import moment from 'moment';

const initialState = {
    range: [],
    isError: false,
    isFetching: false,
    isChecked: '',
    maxTemp: '',
    minTemp: '',
    isTemperature: 0,
    isSubmit: true,
    buttonValue: 'Отфильтровать'
};

export const forcastReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FORCAST_START_FETCHING:
            return { ...state, isFetching: true };
        case types.FORCAST_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.FORCAST_SET_FETCHING_ERROR:
            return { ...state, isError: payload, range: [] };
        case types.FORCAST_FILL:
            return { ...state, range: payload.map((element) => ({...element, day: moment.utc(element.day)})), isError: false };
        
        case types.FORCAST_FETCH_ASYNC:
            return {...initialState};
        case types.IS_SUBMIT_SET:
            return {...state, isSubmit: payload };
        case types.IS_CHECKED_SET:
            return {...state, isChecked: payload };
        case types.MIN_TEMPERATURE_SET:
            return {...state, minTemp: payload.replace(/,/,'.') };
        case types.MAX_TEMPERATURE_SET:
            return {...state, maxTemp: payload.replace(/,/,'.') };
        case types.BUTTON_VALUE_SET:
            return {...state, buttonValue: payload };

        default:
            return state;
    }
}
