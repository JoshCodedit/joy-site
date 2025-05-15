import LatestPublication from "../components/LatestPublication";
import About from "../components/About";
import AllPublications from "../components/AllPublications";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text-primaryGreen">
      <LatestPublication />
      <div className="section-divider"></div>
      <About />
      <AllPublications />
      <div className="section-divider"></div>
      <GetInTouch />
      <Footer />
    </div>
  );
}
