import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

 

function BillForm({ setBills }) {

  const navigate = useNavigate();

 

  const [formData, setFormData] = useState({

    patientName: '',

    patientAddress: '',

    hospitalName: '',

    dateOfService: '',

    billAmount: '',

    billPicture: null,

  });

 

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prevData) => ({

      ...prevData,

      [name]: value,

    }));

  };

 

  const handlePictureUpload = (e) => {

    const file = e.target.files[0];

    setFormData((prevData) => ({

      ...prevData,

      billPicture: file,

    }));

  };

 

  const handleSubmit = async (e) => {

    e.preventDefault();

    const { patientName, patientAddress, hospitalName, dateOfService, billAmount, billPicture } = formData;

 

    // Convert the file to a Base64 string

    const fileReader = new FileReader();

    fileReader.onload = () => {

      const base64Image = fileReader.result;

      const newBill = {

        id: Date.now(),

        patientName,

        patientAddress,

        hospitalName,

        dateOfService,

        billAmount,

        billPicture: base64Image,

      };

      setBills((prevBills) => [...prevBills, newBill]);

      navigate('/');

    };

    fileReader.readAsDataURL(billPicture);

  };

 

  return (

    <div>

      <h1>Upload Medical Bill</h1>

      <form onSubmit={handleSubmit}>

        <div>

          <label>Patient Name:</label>

          <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} />

        </div>

        <div>

          <label>Patient Address:</label>

          <input type="text" name="patientAddress" value={formData.patientAddress} onChange={handleChange} />

        </div>

        <div>

          <label>Hospital Name:</label>

          <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} />

        </div>

        <div>

          <label>Date of Service:</label>

          <input type="text" name="dateOfService" value={formData.dateOfService} onChange={handleChange} />

        </div>

        <div>

          <label>Bill Amount:</label>

          <input type="text" name="billAmount" value={formData.billAmount} onChange={handleChange} />

        </div>

        <div>

          <label>Bill Picture:</label>

          <input type="file" accept="image/*" onChange={handlePictureUpload} />

        </div>

        <button type="submit">Submit</button>

      </form>

    </div>

  );

}

 

export default BillForm;