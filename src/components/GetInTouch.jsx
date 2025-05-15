import ContactForm from "./ContactForm";
import { Element } from "react-scroll";

export default function GetInTouch() {
  return (
    <Element name="contact">
      <div>
        <h3 className="section-header text-center mb-12">Get In Touch</h3>
        <ContactForm />
      </div>
    </Element>
  );
}
