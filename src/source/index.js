import React, { useState } from 'react';

import { Filter } from './components/filter';
import { Day } from './components/day';
import { Forcast } from './components/forcast';

import './styles/index.scss';

import { useForcastFetch } from './hooks/useForcastFetch';

export const Source = () => {

    const { isFetching, range, error } = useForcastFetch();   
    const [isShowing, setIsShowing] = useState(0);    
    const [isFiltered, setIsfiltered] = useState(0);    
    const [filteredForcast, setfilteredForcast] = useState([]);    
    
    return (
        <>
            <main>
                <Filter setIsfiltered = { setIsfiltered } setfilteredForcast = { setfilteredForcast } />
                <Day currentDay = { isFiltered ? filteredForcast : range } isShowing = { isShowing } />
                <Forcast range = { isFiltered ? filteredForcast : range } isShowing = { isShowing } setIsShowing = { setIsShowing } />
            </main>
        </>
    );
};