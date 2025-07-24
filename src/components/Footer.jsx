import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-primaryGreen mt-12 h-[280px] flex flex-col justify-center items-center">
      <div className="max-w-80 flex justify-between w-full mb-12">
        <FontAwesomeIcon
          icon={faXTwitter}
          className="text-3xl text-white cursor-pointer hover:text-primaryOrange"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-3xl text-white cursor-pointer hover:text-primaryOrange"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-3xl text-white cursor-pointer hover:text-primaryOrange"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-3xl text-white cursor-pointer hover:text-primaryOrange"
        />
      </div>
      <p className="text-white text-sm">
        Website by{" "}
        <a
          href="https://joshdixon.co.uk/"
          className="text-[#f3be07] hover:underline"
          target="blank"
        >
          Joshua Dixon
        </a>
      </p>
    </div>
  );
}
