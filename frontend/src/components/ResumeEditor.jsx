import React, { useState, useEffect } from 'react';
import SectionEditor from './SectionEditor';
import ResumeEnhancer from './ResumeEnhancer';
import ResumeDownload from './ResumeDownload';

const ResumeEditor = ({ resumeData, setResumeData }) => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load initial data from props
  useEffect(() => {
    if (resumeData) {
      setName(resumeData.name || '');
      setExperience(resumeData.experience?.map(e => `${e.role} at ${e.company} (${e.duration})`) || []);
      setEducation(resumeData.education?.map(e => `${e.degree}, ${e.institution} (${e.year})`) || []);
      setSkills(resumeData.skills || []);
    }
  }, [resumeData]);

  const handleEnhance = async (section, content) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:8000/ai-enhance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, content }),
      });

      if (!res.ok) throw new Error('Enhancement failed');

      const data = await res.json();
      const updated = data.improved_content;

      if (section === 'experience') setExperience([updated]);
      else if (section === 'education') setEducation([updated]);
      else if (section === 'skills') setSkills([updated]);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while enhancing.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Your Resume</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}

      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-semibold">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <SectionEditor
        title="Experience"
        items={experience}
        onChange={(i, val) => setExperience([...experience.slice(0, i), val, ...experience.slice(i + 1)])}
        onAdd={() => setExperience([...experience, ''])}
        onRemove={(i) => setExperience(experience.filter((_, index) => index !== i))}
      />
      <ResumeEnhancer
        section="experience"
        content={experience.join('\n')}
        onEnhance={handleEnhance}
        loading={loading}
      />

      <SectionEditor
        title="Education"
        items={education}
        onChange={(i, val) => setEducation([...education.slice(0, i), val, ...education.slice(i + 1)])}
        onAdd={() => setEducation([...education, ''])}
        onRemove={(i) => setEducation(education.filter((_, index) => index !== i))}
      />
      <ResumeEnhancer
        section="education"
        content={education.join('\n')}
        onEnhance={handleEnhance}
        loading={loading}
      />

      <SectionEditor
        title="Skills"
        items={skills}
        onChange={(i, val) => setSkills([...skills.slice(0, i), val, ...skills.slice(i + 1)])}
        onAdd={() => setSkills([...skills, ''])}
        onRemove={(i) => setSkills(skills.filter((_, index) => index !== i))}
      />
      <ResumeEnhancer
        section="skills"
        content={skills.join(', ')}
        onEnhance={handleEnhance}
        loading={loading}
      />

      <ResumeDownload resumeData={{ name, experience, education, skills }} />
    </div>
  );
};

export default ResumeEditor;
