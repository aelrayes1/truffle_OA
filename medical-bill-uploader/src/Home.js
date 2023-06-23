import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

 

function Home({ bills, setBills }) {

  const navigate = useNavigate();

 

  const handleAddBill = (newBill) => {

    setBills((prevBills) => [...prevBills, newBill]);

    navigate('/form');

  };

 

  return (

    <div>

      <h1>Uploaded Medical Bills</h1>

      {bills.length === 0 ? (

        <p>No bills uploaded yet.</p>

      ) : (

        <ul>

          {bills.map((bill) => (

            <li key={bill.id}>

              <p>Bill ID: {bill.id}</p>

              <p>Patient Name: {bill.patientName}</p>

              <p>Hospital Name: {bill.hospitalName}</p>

              <Link to={`/summary/${bill.id}`}>View Bill</Link>

            </li>

          ))}

        </ul>

      )}

      <button onClick={() => handleAddBill({ id: bills.length + 1, patientName: 'John Doe', hospitalName: 'Example Hospital' })}>

        Add New Bill

      </button>

    </div>

  );

}

 

export default Home;