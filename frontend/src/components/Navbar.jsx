import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white w-[90vw] flex justify-between items-center fixed top-4 left-[5vw] rounded-full p-3 px-6 z-50 shadow-md border border-gray-200">
      <div className="text-2xl font-bold text-gray-800 relative -top-0.5">
        <Link to="/">ResumeEditor</Link>
      </div>

      <ul className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
        <li className="hover:text-black transition cursor-pointer">
          <Link to="/">Upload Resume</Link>
        </li>
        <li className="hover:text-black transition cursor-pointer">
          <Link to="/enhance">Enhance with AI</Link>
        </li>
        <li className="hover:text-black transition cursor-pointer">
          <Link to="/preview">Preview</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
