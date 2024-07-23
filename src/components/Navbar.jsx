import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between">
      <div className="flex gap-1">
        <p className="text-primary text-xl font-bold">Miftahul</p>
        <p className="text-secondary text-xl font-semibold">Huda</p>
      </div>
      <div className="flex gap-5 hidden md:flex">
        <NavLink to="/about" className="text-primary text-lg font-semibold">
          About
        </NavLink>
        <NavLink to="/projects" className="text-primary text-lg font-semibold">
          Projects
        </NavLink>
        <NavLink to="/education" className="text-primary text-lg font-semibold">
          Education
        </NavLink>
      </div>
      {/* nav mobile */}
      <div className="flex flex-col gap-2 justify-end items-end md:hidden">
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <NavLink
                to="/about"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </NavLink>
              <NavLink
                to="/education"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Education
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
