import Student from '../models/studentModel.js';

// Get student details by enrollment number and DOB
export const getStudentDetails = async (req, res) => {
  const { enrollmentNumber, dob } = req.query;

  try {
    const student = await Student.findOne({ enrollmentNumber, dob });

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving student details', error });
  }
};
