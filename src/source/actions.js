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
    }
});