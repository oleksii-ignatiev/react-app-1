import { combineReducers } from 'redux';

import { forcastReducer as forcast } from '../reducer';

export const rootReducer = combineReducers({
    forcast
});
