import React from 'react'
import Navbar from '../components_lite/Navbar'
import nishu from './nishu.jpg'; // Add your image here

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={nishu} alt="Nishu Kumar" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nishu Kumar</h2>
            <p className="text-gray-600 mb-2">Hello! I'm <strong>Nishu Kumar</strong>, currently pursuing my <strong>B.Tech in Computer Science Engineering</strong> from <strong>Jai Narain College of Technology, Bhopal</strong>. I hail from <strong>Raigarh, Chhattisgarh</strong>, and I have a strong passion for building impactful web applications and solving real-world problems through technology.</p>
            <p className="text-gray-600 mb-2">One of my key projects is <strong>NextGig</strong> — a web-based job-finding platform designed to bridge the gap between employers and blue-collar workers. It’s focused on improving job accessibility and streamlining the hiring process online.</p>
            <p className="text-gray-600 mb-2">In addition to NextGig, I'm also actively working on an <strong>Urban Waste Control Dashboard</strong> that provides data analytics, concern management, and automation to improve public service efficiency.</p>
            <p className="text-gray-600">With a deep interest in full-stack development and problem-solving, I enjoy working with technologies like <strong>React, Node.js, Express, MongoDB</strong>, and applying concepts from <strong>Data Structures and Algorithms</strong> to real-life projects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creator
