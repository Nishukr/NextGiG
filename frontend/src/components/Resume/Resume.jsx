import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const ResumeBuilder = () => {
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

  // Handle input changes and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to generate the PDF using html2pdf
  const generatePDF = () => {
    const element = document.getElementById("resumeContent");

    // Check if the element exists
    if (element) {
      // Generate the PDF
      html2pdf()
        .from(element)  // Target the element
        .save("Resume.pdf");  // Set the name for the downloaded PDF
    } else {
      console.log("No resume content found!");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <h2>Resume Form</h2>
      <form
        onSubmit={(e) => e.preventDefault()} // Prevents form from refreshing the page
        style={{ display: "grid", gap: "10px" }}
      >
        {/* All input fields bound to formData */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <input
          type="text"
          name="school10"
          value={formData.school10}
          onChange={handleChange}
          placeholder="10th School Name"
        />
        <input
          type="text"
          name="percent10"
          value={formData.percent10}
          onChange={handleChange}
          placeholder="10th Percentage"
        />

        <input
          type="text"
          name="school12"
          value={formData.school12}
          onChange={handleChange}
          placeholder="12th School Name"
        />
        <input
          type="text"
          name="percent12"
          value={formData.percent12}
          onChange={handleChange}
          placeholder="12th Percentage"
        />

        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
          placeholder="College Name"
        />
        <input
          type="text"
          name="collegePercent"
          value={formData.collegePercent}
          onChange={handleChange}
          placeholder="College Percentage"
        />

        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma-separated)"
          rows="3"
        />
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Work Experience"
          rows="3"
        />
        <textarea
          name="projects"
          value={formData.projects}
          onChange={handleChange}
          placeholder="Projects"
          rows="3"
        />
        <textarea
          name="certificates"
          value={formData.certificates}
          onChange={handleChange}
          placeholder="Certificates"
          rows="3"
        />

        <button
          type="button"
          onClick={generatePDF}
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Generate Resume PDF
        </button>
      </form>

      {/* Hidden resume content for PDF generation */}
      <div id="resumeContent" style={{ display: "none", padding: "30px", backgroundColor: "white" }}>
        <h1>{formData.name}</h1>
        <p>{formData.email} | {formData.phone}</p>
        <p>{formData.address}</p>

        <h3>Education</h3>
        <ul>
          <li>10th: {formData.school10} - {formData.percent10}%</li>
          <li>12th: {formData.school12} - {formData.percent12}%</li>
          <li>College: {formData.college} - {formData.collegePercent}%</li>
        </ul>

        <h3>Skills</h3>
        <p>{formData.skills}</p>

        <h3>Experience</h3>
        <p>{formData.experience}</p>

        <h3>Projects</h3>
        <p>{formData.projects}</p>

        <h3>Certificates</h3>
        <p>{formData.certificates}</p>
      </div>
    </div>
  );
};

export default ResumeBuilder;

