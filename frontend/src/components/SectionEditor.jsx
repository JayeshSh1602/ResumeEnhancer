import React from 'react';

const SectionEditor = ({ title, items, onChange, onAdd, onRemove }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={item}
            onChange={(e) => onChange(index, e.target.value)}
            className="flex-1 border border-gray-300 px-3 py-1 rounded"
          />
          <button onClick={() => onRemove(index)} className="text-red-500">Remove</button>
        </div>
      ))}
      <button onClick={onAdd} className="text-blue-600 underline text-sm">+ Add {title}</button>
    </div>
  );
};

export default SectionEditor;
