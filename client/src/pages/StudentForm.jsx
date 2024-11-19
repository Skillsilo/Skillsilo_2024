import React, { useState } from 'react';
import axios from 'axios';
import StudentDetails from '../components/StudentDetails';

const StudentForm = () => {
  const [formData, setFormData] = useState({ enrollment: '', dob: '' });
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-'); // Split `yyyy-mm-dd` format
    return `${year}-${month}-${day}`; // Rearrange into `dd-mm-yyyy`
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStudentData(null); // Clear previous data

    try {
      // Format the DOB
      const formattedDob = formatDate(formData.dob);

      // Build the query string
      const url = `http://localhost:3000/api/student?enrollment=${formData.enrollment}&dob=${formattedDob}`;

      // Make the GET request
      const response = await axios.get(url);

      setStudentData(response.data); // Save API response
    } catch (err) {
      console.error(err);
      setError('Unable to fetch student data. Please check your details.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Student Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Enrollment Number:</label>
          <input
            type="text"
            name="enrollment"
            value={formData.enrollment}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {studentData && <StudentDetails studentData={studentData} />}
    </div>
  );
};

export default StudentForm;
