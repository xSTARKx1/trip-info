// External
import React, { FC } from 'react';
import moment from 'moment';

import { FlightTypes } from '../../types';

import './index.scss';

interface Props {
    data: FlightTypes,
}

const FlightDetails: FC<Props> = (props) => {
    const { airlineName, departure, arrival } = props.data;
    return (
        <div>
            <p>{airlineName}</p>
            <div className='flight-info'>
                <div>Departure:
                    <p>{departure.cityName}</p>
                    <p>{departure.airportName}</p>
                    <p>{moment(departure.estimated * 1000).format('LLL')}</p>
                </div>
                <div>Arrival:
                    <p>{arrival.cityName}</p>
                    <p>{arrival.airportName}</p>
                    <p>{moment(arrival.estimated * 1000).format('LLL')}</p>
                </div>
            </div>
        </div>
    );
}

export default FlightDetails;
