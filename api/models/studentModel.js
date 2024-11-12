import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  srNo: Number,
  date: Number,
  studentName: String,
  fatherName: String,
  motherName: String,
  enrollmentNumber: String,
  dob: String,  // Stored as string
  course: String,
  le: String,
  branch: String,
  resultStatus: String,
});

export default mongoose.model('Student', studentSchema);
