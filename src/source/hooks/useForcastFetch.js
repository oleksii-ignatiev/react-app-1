import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { forcastActions } from '../actions';

export const useForcastFetch = (days = 14) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(forcastActions.fetchAsync(days));
    }, [dispatch, days]);

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
