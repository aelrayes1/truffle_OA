import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BillForm from './Billform';

import Summary from './Summary';

import Home from './Home';

 

function App() {

  const [bills, setBills] = useState([]);

 

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home bills={bills} setBills={setBills} />} />

        <Route path="/form" element={<BillForm setBills={setBills} />} />

        <Route path="/summary/:billId" element={<Summary bills={bills} />} />

      </Routes>

    </Router>

  );

}

 

export default App;