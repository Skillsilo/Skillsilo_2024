import Student from '../models/studentModel.js';

// Get student details by enrollment number and DOB
export const getStudentDetails = async (req, res) => {
  const { enrollment, dob } = req.query;

  console.log('Enrollment:', enrollment);
  console.log('DOB:', dob);

  try {
    const student = await Student.findOne({ "Enrollment Number": enrollment, DOB: dob });

    if (student) {
      console.log('Student found:', student);
      res.json(student);
    } else {
      console.log('Student not found');
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error('Error in fetching student details:', error);
    res.status(500).json({ message: 'Error retrieving student details', error });
  }
};
