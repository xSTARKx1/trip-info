// External
import React from 'react';
import {Link, useParams} from 'react-router-dom';

import { useAppSelector } from '../../../app/hooks';
import { DocumentDetails, FlightDetails } from '../../components';
import { flights, selectBrief } from '../../../features/brief/briefSlice';
import { DocumentTypes, FlightTypes } from '../../types';
import NotFound from '../../../NotFound';

import './index.scss';

const BriefInfo = () => {
    const params = useParams();
    const briefDetails = useAppSelector(state => selectBrief(state, params.id));
    const flightsInfo = useAppSelector(state => flights(state, briefDetails ? briefDetails.flightIds : []));

    return (
        <>{
            briefDetails ?
            <div className='detail-info-background' style={{backgroundImage: `url("${briefDetails.dailyPhoto}")`}}>
                <div className='detail-info-wrapper'>
                    <h1 className='main-title'>{briefDetails.headline}</h1>
                    <p className='main-description'>{briefDetails.shortInformation}</p>
                    {briefDetails.location ? <p className='additional-information'>Location: {briefDetails.location.name}</p> : null}
                    <div className='documents-wrapper'>
                        {briefDetails.documents.map((document: DocumentTypes) =>
                            <DocumentDetails
                                key={document.id}
                                document={document}
                            />
                        )}
                    </div>
                    {flightsInfo.length > 0 && flightsInfo.map(({ id, flights }) => {
                        return (
                            <div key={id} className='flights-wrapper'>Flights: {flights.map((flight: FlightTypes) =>
                                <div key={flight.id}>
                                    <FlightDetails data={flight}/>
                                </div>
                            )}
                            </div>
                        )}
                    )}
                    <div className='return-button-wrapper'>
                        <Link to={'/brief'} className='return-button'>Back to list</Link>
                    </div>
                </div>
            </div>
            :
            <NotFound
                to={'/brief'}
                text={'Brief not found'}
                linkText={'Back to list'}
            />
        }
        </>
    );
}

export default BriefInfo;
