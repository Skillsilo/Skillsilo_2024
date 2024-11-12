import express from 'express';
import { getStudentDetails } from '../controllers/studentController.js';

const router = express.Router();

// Define the route for getting student details
router.get('/student', getStudentDetails);

export default router;
