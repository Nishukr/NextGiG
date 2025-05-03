import React, { useState } from "react";
import { saveResume } from "../api/resumeApi";
import ResumePage from "./ResumePage";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    school10: "",
    percent10: "",
    school12: "",
    percent12: "",
    college: "",
    collegePercent: "",
    skills: "",
    experience: "",
    projects: "",
    certificates: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveResume(formData);
    setSubmitted(true);
  };

  return submitted ? (
    <ResumePage data={formData} />
  ) : (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", padding: "20px" }}>
      {Object.keys(formData).map((key) => (
        key === "skills" || key === "experience" || key === "projects" || key === "certificates" ? (
          <textarea
            key={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key}
            rows="3"
          />
        ) : (
          <input
            key={key}
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key}
          />
        )
      ))}
      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
