// pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';

const Home = ({ resumeData, setResumeData, handleFileSelect, fileInputRef }) => {
  const navigate = useNavigate();

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">Welcome to ResumeEditor</h1>
      <p className="text-gray-600 mb-6">Upload your resume to get started.</p>

      <input
        type="file"
        accept=".pdf,.docx"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />
      <button
        onClick={triggerUpload}
        className="bg-black text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-gray-800 transition mx-auto"
      >
        <FaUpload /> Upload Resume
      </button>

      {resumeData && (
        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={() => navigate('/editor')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit with AI
          </button>
          <button
            onClick={() => navigate('/enhance')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Enhance with AI
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
