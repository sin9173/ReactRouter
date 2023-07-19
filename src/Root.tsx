import React from 'react';
import Router from './Router';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Router/> */}
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
