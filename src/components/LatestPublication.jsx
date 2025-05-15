import LatestPublicationCard from "./LatestPublicationCard";
import textContent from "../../public/docs/latest-publication-content.txt?raw";

export default function LatestPublication() {
  const head = "Like Lockdown Never Happened";
  const image = "/images/latest-publication.jpeg";
  const link =
    "https://repeaterbooks.com/product/like-lockdown-never-happened-music-and-culture-during-covid/";

  return (
    <div>
      <div id="publication">
        <LatestPublicationCard
          head={head}
          content={textContent}
          image={image}
          link={link}
        />
      </div>
    </div>
  );
}
