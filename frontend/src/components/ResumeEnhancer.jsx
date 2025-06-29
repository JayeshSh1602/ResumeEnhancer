import React from 'react';

const ResumeEnhancer = ({ section, content, onEnhance }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg mb-1">{section}</h3>
      <textarea
        value={content}
        readOnly
        className="w-full border border-gray-300 p-2 mb-2 rounded"
        rows={4}
      />
      <button
        onClick={() => onEnhance(section, content)}
        className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800 text-sm"
      >
        Enhance with AI
      </button>
    </div>
  );
};

export default ResumeEnhancer;
