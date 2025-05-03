import axios from "axios";

const API_BASE = "http://localhost:5000/api/resume"; // adjust backend URL

export const saveResume = async (data) => {
  try {
    const res = await axios.post(`${API_BASE}/create`, data);
    return res.data;
  } catch (err) {
    console.error("Error saving resume:", err);
    throw err;
  }
};
