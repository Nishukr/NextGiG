import React from "react";

function App() {
  const handleNavigate = () => {
    window.location.href = "http://localhost:3000"; // Navigate to Gig AI (Next.js app)
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        color: "white",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Welcome to Gig AI</h1>
      
      <p style={{ fontSize: "1.1rem", maxWidth: "600px", textAlign: "center", lineHeight: "1.6" }}>
        <strong>Gig AI</strong> is your intelligent job-matching assistant, helping you discover personalized job
        opportunities, match your resume with employer needs, and get instant feedback using AI-powered tools.
        Experience a smarter and faster job hunt with Gig AI.
      </p>

      <button
        onClick={handleNavigate}
        style={{
          padding: "12px 24px",
          marginTop: "30px",
          cursor: "pointer",
          backgroundColor: "#FA4F09",
          border: "none",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Launch Gig AI Platform
      </button>
    </div>
  );
}

export default App;
