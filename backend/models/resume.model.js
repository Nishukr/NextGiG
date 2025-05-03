import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  summary: String,
  education: [String],
  experience: [String],
  skills: [String],
}, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);
export default Resume;
