import React from 'react';
import ResumeEnhancer from './ResumeEnhancer';

const EnhancePage = ({ resumeData, setResumeData }) => {
  if (!resumeData) {
    return <div className="text-center mt-20 text-red-500">No resume uploaded yet.</div>;
  }

  const handleEnhance = async (section, content) => {
    const res = await fetch('http://localhost:8000/ai-enhance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section, content }),
    });

    const data = await res.json();
    const updated = data.improved_content;

    const newData = { ...resumeData, [section]: [updated] };
    setResumeData(newData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Enhance Your Resume</h1>
      <ResumeEnhancer
        section="experience"
        content={resumeData.experience?.join('\n')}
        onEnhance={handleEnhance}
      />
      <ResumeEnhancer
        section="education"
        content={resumeData.education?.join('\n')}
        onEnhance={handleEnhance}
      />
      <ResumeEnhancer
        section="skills"
        content={resumeData.skills?.join(', ')}
        onEnhance={handleEnhance}
      />
    </div>
  );
};

export default EnhancePage;
