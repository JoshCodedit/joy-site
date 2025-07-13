import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import publications from "../../public/docs/publications.json";
import Publication from "./Publication";
import Button from "./Button";
import { NavLink } from "react-router-dom";

export default function AllPublications() {
  console.log("Publications data:", publications); // Debug log

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    swipeToSlide: true,
    className: "sm:hidden", // Hide slider in desktop
  };

  if (!publications || publications.length === 0) {
    return <div>No publications available</div>;
  }

  return (
    <div className="my-20">
      {/* Mobile Carousel */}
      <div className="block sm:hidden ">
        {publications.length > 0 && (
          <Slider {...settings}>
            {publications.map((publication) => (
              <div key={publication.id} className="px-4 ">
                <Publication
                  title={publication.title}
                  cover={publication.cover}
                  summary={publication.summary}
                  link={publication.link}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:flex sm:justify-between sm:w-[1400px] sm:m-auto">
        {publications.map((publication) => (
          <Publication
            key={publication.id}
            title={publication.title}
            cover={publication.cover}
            summary={publication.summary}
            link={publication.link}
          />
        ))}
      </div>
    </div>
  );
}
