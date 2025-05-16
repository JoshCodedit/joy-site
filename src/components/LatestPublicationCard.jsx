import Button from "../components/Button";
import renderText from "../functions/functions";

export default function LatestPublicationCard(props) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-auto sm:h-[650px] px-4 sm:px-0">
      <div className="order-2 sm:order-1 sm:mr-[122px] w-full sm:w-auto mb-8 sm:mb-0">
        <div
          className="sm:w-[600px] sm:border-r-2 border-primaryGreen sm:pr-12 text-center sm:text-left"
          id="text"
        >
          <div className="section-divider sm:hidden"></div>
          <h3 className="section-header mb-5">Latest Publication:</h3>
          {/* Image for mobile view */}
          <div className="block sm:hidden mb-4">
            <img
              src={props.image}
              alt={props.imageAlt}
              className="mx-auto max-w-xs mb-12"
            />
          </div>
          <h4 className="text-xl font-semibold font-roboto mb-4">
            {props.head}
          </h4>

          <div className="sm:main-text mb-6 space-y-3">
            {renderText(props.content)}
          </div>

          <div className="sm:text-right text-center">
            <Button
              link={props.link}
              text="Read More"
              className="inline-block"
            />{" "}
          </div>
        </div>
      </div>

      {/* Image for desktop view */}
      <div className="hidden sm:block order-1 sm:order-2">
        <img
          src={props.image}
          alt={props.imageAlt}
          className="max-h-[487px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
