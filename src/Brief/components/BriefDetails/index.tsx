// External
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BriefTypes } from '../../types';

import './index.scss'

interface Props {
    data: BriefTypes,
}

const BriefDetails: FC<Props> = (props) => {
    const { id, headline, shortInformation, dailyPhoto } = props.data;
    return (
        <div className='item-wrapper'>
            <div className='info-wrapper'>
                <img src={dailyPhoto} alt={headline} className='image'/>
                <p>{headline}</p>
                <p>{shortInformation}</p>
            </div>
            <Link to={`/brief/${id}`} className='link'>More details</Link>
        </div>
    );
}

export default BriefDetails;
