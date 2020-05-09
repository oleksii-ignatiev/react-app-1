import { types } from './types';

import { api } from './api/api';

export const forcastActions = Object.freeze({

    startFetching: () => {
        return {
            type: types.FORCAST_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.FORCAST_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.FORCAST_FILL,
            payload: payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.FORCAST_SET_FETCHING_ERROR,
            isError: true,
            payload: error
        }
    },

    fetchAsync: (days) => async (dispatch) => {
        dispatch({
            type: types.FORCAST_FETCH_ASYNC
        });

        dispatch(forcastActions.startFetching());

        const response = await api.forcast.get(days);
        
        if (response.status === 200) {
            const results = await response.json();
            
            dispatch(forcastActions.fill(results.data));
            
        } else {
            const error = {
                status: response.status
            };

            dispatch(forcastActions.setFetchingError(error));
        }
        dispatch(forcastActions.stopFetching());
    },

    setIsSubmit: (payload) => {
        return {
            type: types.IS_SUBMIT_SET,
            payload: payload
        }
    },

    setIsChecked: (payload) => {
        return {
            type: types.IS_CHECKED_SET,
            payload: payload
        }
    },

    setMaxTemp: (payload) => {
        return {
            type: types.MAX_TEMPERATURE_SET,
            payload: payload
        }
    },

    setMinTemp: (payload) => {
        return {
            type: types.MIN_TEMPERATURE_SET,
            payload: payload
        }
    },

    setButtonValue: (payload) => {
        return {
            type: types.BUTTON_VALUE_SET,
            payload: payload
        }
    },

    setInitState: () => {
        return {
            type: types.FORCAST_INIT_STATE
        }
    }
});