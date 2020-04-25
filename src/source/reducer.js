import { types } from './types';

const initialState = {
    range: [],
    isError: null,
    isFetching: false,
};

export const forcastReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FORCAST_START_FETCHING:
            return { ...state, isFetching: true };
        case types.FORCAST_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.FORCAST_SET_FETCHING_ERROR:
            return { ...state, isError: payload, range: null };
        case types.FORCAST_FILL:
            return { ...state, range: payload, isError: null };

        default:
            return state;
    }
}
