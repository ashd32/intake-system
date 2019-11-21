import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-container card py-3">
      <div>
        <p className="text-center mb-1">Thank you for using</p>
        <div className="about-header d-flex justify-content-center align-items-center mb-0">
          <h3><span style={{ color: "#007bff", fontWeight: "bold" }}>Simm</span>-Flow</h3>
        </div>
        <div className="about-body text-center mb-0">
          <p><span style={{ fontWeight: "bold" }}>version</span> 1.0.0</p>
          <Link style={{ fontWeight: "bold" }} to="https://github.com/oghusky/business-tracker">Check Out My Code</Link>
        </div>
      </div>
    </div>
  )
}
