import express from 'express';
const router = express.Router();

import {
  createResume,
  getResume,
  getAllResumes,
  updateResume,
  deleteResume
} from '../controllers/resumeController.js';

router.post('/createResume', createResume);
router.get('/getResume/:id', getResume);
router.get('/getAllResumes', getAllResumes);
router.put('/updateResume/:id', updateResume);
router.delete('/deleteResume/:id', deleteResume);

export default router;
