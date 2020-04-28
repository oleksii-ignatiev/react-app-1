import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { forcastActions } from '../actions';

export const useForcastFetch = (DEFAULT_NUMBER_OF_DAYS = 14) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(forcastActions.fetchAsync(DEFAULT_NUMBER_OF_DAYS));
    }, [dispatch, DEFAULT_NUMBER_OF_DAYS]);

    const {
        range,
        isFetching,
        isError
    } = useSelector((state) => state.forcast);

    return {
        range,
        isFetching,
        isError
    }
}
