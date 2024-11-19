import React from 'react';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
};

const StudentDetails = ({ studentData }) => {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>Student Information</h3>
      <p><strong>Name:</strong> {studentData['Student Name']}</p>
      <p><strong>Father's Name:</strong> {studentData['Father Name']}</p>
      <p><strong>Mother's Name:</strong> {studentData['Mother Name']}</p>
      <p><strong>Enrollment Number:</strong> {studentData['Enrollment Number']}</p>
      <p><strong>Date of Birth:</strong> {formatDate(studentData.DOB)}</p>
      <p><strong>Course:</strong> {studentData.COURSE}</p>
      <p><strong>Branch:</strong> {studentData.BRANCH}</p>
      <p><strong>Result Status:</strong> {studentData['Result Status']}</p>
    </div>
  );
};

export default StudentDetails;
