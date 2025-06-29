const ResumeDownload = ({ resumeData }) => {
  if (!resumeData) {
    return <div className="text-center mt-20 text-red-500">Nothing to preview. Please upload and enhance first.</div>;
  }

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.json';
    link.click();
  };

  return (
    <div className="text-center mt-16">
      <h2 className="text-xl font-bold mb-4">Preview Enhanced Resume</h2>
      <pre className="text-left bg-gray-100 p-4 rounded border border-gray-300 max-w-2xl mx-auto">
        {JSON.stringify(resumeData, null, 2)}
      </pre>
      <button
        onClick={handleDownload}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download Resume as JSON
      </button>
    </div>
  );
};

export default ResumeDownload;
