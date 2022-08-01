import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Brief from './Brief';
import NotFound from './NotFound';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="brief/*"  element={<Brief />}/>
          <Route path="*" element={
              <NotFound
                  to={'/brief'}
                  text={'Page not found'}
                  linkText={'Back to Main Page'}
              />}
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
