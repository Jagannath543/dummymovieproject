// Loading.jsx
import React from 'react';
import './Loading.css';  // Ensure the correct path for the CSS file

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
