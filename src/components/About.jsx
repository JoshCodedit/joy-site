import Button from "../components/Button";
import textContent from "../../public/docs/biography.txt?raw";
import renderText from "../functions/functions";

export default function About() {
  return (
    <>
      <h3 className="section-header text-center mb-6">About</h3>
      <div className="flex justify-center items-center">
        <img
          src="/images/dr-joy-white.jpg"
          alt="dr joy white"
          className="w-[350px]"
        />
        <div className="ml-[152px] border-b-2 border-primaryGreen w-[500px]">
          <div className="main-text my-6 space-y-6">
            {renderText(textContent)}
          </div>
          <div className="text-right">
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
