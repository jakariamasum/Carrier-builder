import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-base-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-[#757575]">
              Career Builder
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4  text-[#757575]">
              <Link to="/" className=" hover:bg-success px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/statistics" className=" hover:bg-success px-3 py-2 rounded-md text-sm font-medium">
                Statistics
              </Link>
              <Link to="/applied-jobs" className=" hover:bg-success px-3 py-2 rounded-md text-sm font-medium">
                Applied Jobs
              </Link>
              <Link to="/blog" className=" hover:bg-success px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-success focus:outline-none focus:bg-success focus:text-white transition duration-150 ease-in-out">
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <div className="text-[#757575] px-2 pt-2 pb-3 sm:px-3">
            <Link to="/" className="block  font-medium hover:bg-success rounded-md px-3 py-2">
              Home
            </Link>
            <Link to="/statistics" className="block font-medium hover:bg-success rounded-md px-3 py-2">
              Statistics
            </Link>
            <Link to="/applied-jobs" className="block font-medium hover:bg-success rounded-md px-3 py-2">
              Applied Jobs
            </Link>
            <Link to="/blog" className="block text-[#757575] font-medium hover:bg-success rounded-md px-3 py-2">
              Blog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
