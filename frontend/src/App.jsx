import React, { useRef, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ResumeEditor from './components/ResumeEditor';
import EnhancePage from './components/EnhancePage';
import ResumeDownload from './components/ResumeDownload';

const App = () => {
  const [resumeData, setResumeData] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const dummyData = {
      name: 'John Doe',
      experience: [{ company: 'ABC Corp', role: 'Software Engineer', duration: '2 years' }],
      education: [{ institution: 'XYZ University', degree: 'B.Tech', year: '2022' }],
      skills: ['JavaScript', 'React', 'Node.js']
    };

    setResumeData(dummyData);
  };

  return (
    <div className="pt-24 px-6">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleFileSelect={handleFileSelect}
            fileInputRef={fileInputRef}
          />
        } />
        <Route path="/editor" element={<ResumeEditor resumeData={resumeData} setResumeData={setResumeData} />} />
        <Route path="/enhance" element={<EnhancePage resumeData={resumeData} setResumeData={setResumeData} />} />
        <Route path="/preview" element={<ResumeDownload resumeData={resumeData} />} />
        <Route path="*" element={<div className="p-10 text-center">404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;