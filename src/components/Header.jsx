import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-primaryGreen">
      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-8 px-3 right-4 z-[60] sm:hidden transition-transform duration-300 ${
          isOpen ? "transform rotate-90 text-white" : ""
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div className="py-7 relative">
        <div className="flex sm:block items-center px-4">
          <h1 className="text-4xl font-bold font-fustat text-center ml-[2%] sm:ml-0">
            DR JOY WHITE
          </h1>
        </div>
        <h2 className="text-center font-fragment italic">
          Sociologist, Ethnographer, Researcher
        </h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:block bg-primaryGreen">
        <ul className="flex justify-center space-x-7 text-white font-light py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/presentations"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
            >
              PRESENTATIONS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-primaryOrange cursor-pointer"
            >
              CONTACT
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden fixed top-0 right-0 h-screen w-64 bg-primaryGreen transform transition-transform duration-300 ease-in-out z-50`}
      >
        <ul className="flex flex-col text-white font-light py-2 pt-20">
          <li className="px-4 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
              onClick={() => setIsOpen(false)}
            >
              HOME
            </NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink
              to="/presentations"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
              onClick={() => setIsOpen(false)}
            >
              PRESENTATIONS
            </NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primaryOrange active"
                  : "hover:text-primaryOrange"
              }
              onClick={() => setIsOpen(false)}
            >
              GALLERY
            </NavLink>
          </li>
          <li className="px-4 py-2">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-primaryOrange cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </ScrollLink>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
