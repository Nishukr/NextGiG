import Resume from '../models/resume.model.js';

export const createResume = async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ error: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateResume = async (req, res) => {
  try {
    const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Resume not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteResume = async (req, res) => {
  try {
    const deleted = await Resume.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Resume not found' });
    res.json({ message: 'Resume deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
