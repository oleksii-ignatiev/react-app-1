import { types } from './types';
import moment from 'moment';

const initialState = {
    range: [],
    isError: false,
    isFetching: false,
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

        default:
            return state;
    }
}
