// External
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import { fetchBriefData, selectAllBrief } from '../../../features/brief/briefSlice';
import { BriefDetails } from '../../components';
import { BriefTypes } from '../../types';

import './index.scss';

const Brief = () => {
    const dispatch = useAppDispatch();
    const brief = useAppSelector(selectAllBrief);

    useEffect(() => {
        dispatch(fetchBriefData());
    }, [dispatch])

    return (
        <>
            <h1 className='main-title'>Trip Details</h1>
            <div className='list-wrapper'>
                {brief.map((data: BriefTypes) => <BriefDetails key={data.id} data={data}/>)}
            </div>
        </>
    );
}

export default Brief;
