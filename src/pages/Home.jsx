import LatestPublication from "../components/LatestPublication";
import About from "../components/About";
import AllPublications from "../components/AllPublications";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="text-primaryGreen">
      <LatestPublication />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider sm:invisible"></div>
      <h2 className="section-header text-center my-12">Publications</h2>
      <AllPublications />
      <div className="text-center">
        <NavLink to="/publications">
          <Button text="View All" className="inline-block mb-12" />
        </NavLink>
      </div>
      <div className="section-divider"></div>
      <GetInTouch />
      <Footer />
    </div>
  );
}
