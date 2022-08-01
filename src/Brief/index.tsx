// External
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AllBriefs, BriefInfo } from './pages'
import NotFound from '../NotFound';

function Brief() {
    return (
        <Routes>
            <Route path="/" element={<AllBriefs />}/>
            <Route path=":id" element={<BriefInfo />} />
            <Route path="*" element={
                <NotFound
                    to={'/brief'}
                    text={'Brief not found'}
                    linkText={'Back to list'}
                />}
            />
        </Routes>
    );
}

export default Brief;
