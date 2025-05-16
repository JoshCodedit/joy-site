import Button from "../components/Button";
import textContent from "../../public/docs/biography.txt?raw";
import renderText from "../functions/functions";

export default function About() {
  return (
    <>
      <h3 className="section-header text-center mb-6">About</h3>
      <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-0">
        {/* Image - show in both views */}
        <img
          src="/images/dr-joy-white.jpg"
          alt="dr joy white"
          className="w-[350px] mb-12 sm:mb-0"
        />
        {/* Text content */}
        <div className="sm:ml-[152px] w-full sm:w-[500px] sm:border-b-2 border-primaryGreen">
          <div className="sm:main-text text-main-mobile my-6 space-y-6 text-center sm:text-left">
            {renderText(textContent)}
          </div>
          <div className="text-center sm:text-right">
            <Button
              className="inline-block mb-10"
              text="Read More"
              link="/about"
            />
          </div>
        </div>
      </div>
    </>
  );
}
