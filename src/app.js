import React from 'react';
import { Source } from './source';
import { Provider } from 'react-redux';

import './source/init/moment';
import { store } from './source/init/store';

export const App = () => {
    return (
        <Provider store = { store } >
            <Source />
        </Provider>
    )
};
