import React from 'react';

 

function BillSummary({ billData, onEdit }) {

  const { patientName, patientAddress, hospitalName, dateOfService, billAmount, billPicture } = billData;

 

  return (

    <div>

      <h1>Bill Summary</h1>

      <div>

        <h3>Patient Name:</h3>

        <p>{patientName}</p>

      </div>

      <div>

        <h3>Patient Address:</h3>

        <p>{patientAddress}</p>

      </div>

      <div>

        <h3>Hospital Name:</h3>

        <p>{hospitalName}</p>

      </div>

      <div>

        <h3>Date of Service:</h3>

        <p>{dateOfService}</p>

      </div>

      <div>

        <h3>Bill Amount:</h3>

        <p>{billAmount}</p>

      </div>

      <div>

        <h3>Bill Picture:</h3>

        {billPicture && <img src={URL.createObjectURL(billPicture)} alt="Bill" />}

      </div>

      <button onClick={onEdit}>Edit Information</button>

    </div>

  );

}

 

export default BillSummary;