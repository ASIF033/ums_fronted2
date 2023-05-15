


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateDataForm = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');



  useEffect(() => {
    axios.get('http://localhost:3000/admin/index')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectChange = e => {
    const id = parseInt(e.target.value);
    const selected = data.find(d => d.id === id);
    setSelectedData(selected);
    setName(selected.name);
    setEmail(selected.email);
  

  
  };

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    axios.put(`http://localhost:3000/admin/updateuser`, 
      {
      name,
      email
  }
    )
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Update Admin Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Admin Data:</label>
          <select onChange={handleSelectChange}>
            <option value="">-- Select --</option>
            {data.map(d => (
              <option key={d.id} value={d.id}>{d.email}</option>
            ))}
          </select>
        </div>
        {selectedData && (
          <>
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} readOnly/>
            </div>
         
          
            <button type="submit">Save Changes</button>
          </>
        )}
      </form>
    </div>
    
  );
};

export default UpdateDataForm;