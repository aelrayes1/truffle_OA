import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
 
function Summary({ bills }) {
  const location = useLocation();
  const navigate = useNavigate();
  const billId = location.pathname.split('/').pop();
  const bill = bills.find((bill) => bill.id === Number(billId));
 
  const handleEditInformation = () => {
    navigate('/form');
  };
 
  const handleGoHome = () => {
    navigate('/');
  };
 
  return (
    <div>
      <h1>Summary</h1>
      {bill ? (
        <React.Fragment>
          <p>Patient Name: {bill.patientName || 'N/A'}</p>
          <p>Patient Address: {bill.patientAddress || 'N/A'}</p>
          <p>Hospital Name: {bill.hospitalName || 'N/A'}</p>
          <p>Date of Service: {bill.dateOfService || 'N/A'}</p>
          <p>Bill Amount: {bill.billAmount || 'N/A'}</p>
          {bill.billPicture && (
            <div>
              <p>Bill Picture:</p>
              <img src={bill.billPicture} alt="Bill" />
            </div>
          )}
        </React.Fragment>
      ) : (
        <p>Bill not found.</p>
      )}
      <button onClick={handleEditInformation}>Edit Information</button>
      <button onClick={handleGoHome}>Go Back to Home</button>
    </div>
  );
}
 
export default Summary;
