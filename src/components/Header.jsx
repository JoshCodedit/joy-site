import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  return (
    <div className="bg-white text-primaryGreen">
      <div className="py-7">
        <h1 className="text-center text-4xl font-bold mb-2 font-fustat">
          DR JOY WHITE
        </h1>
        <h2 className="flex justify-center font-fragment italic">
          Sociologist, Ethnographer, Researcher
        </h2>
      </div>
      <ul className="flex justify-center space-x-7 bg-primaryGreen text-white font-light py-2">
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
    </div>
  );
}
