import React from "react";
import html2pdf from "html2pdf.js";

const ResumePage = ({ data }) => {
  const handleDownload = () => {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save(`${data.name}_Resume.pdf`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div id="resume-preview" style={{ backgroundColor: "white", padding: "20px" }}>
        <h1>{data.name}</h1>
        <p>{data.email} | {data.phone}</p>
        <p>{data.address}</p>

        <h3>Education</h3>
        <ul>
          <li>10th: {data.school10} - {data.percent10}%</li>
          <li>12th: {data.school12} - {data.percent12}%</li>
          <li>College: {data.college} - {data.collegePercent}%</li>
        </ul>

        <h3>Skills</h3>
        <p>{data.skills}</p>

        <h3>Experience</h3>
        <p>{data.experience}</p>

        <h3>Projects</h3>
        <p>{data.projects}</p>

        <h3>Certificates</h3>
        <p>{data.certificates}</p>
      </div>
      <button onClick={handleDownload} style={{ marginTop: "20px" }}>
        Download PDF
      </button>
    </div>
  );
};

export default ResumePage;
