import Button from "../components/Button";
import renderText from "../functions/functions";

export default function LatestPublicationCard(props) {

  return (
    <div className="flex justify-center items-center h-[650px]">
      <div className="mr-[122px]">
        <div className="w-[600px] border-r-2 border-primaryGreen pr-12" id="text">
          <h3 className="section-header mb-5">Latest Publication:</h3>
          <h4 className="text-l font-semibold font-roboto mb-4">{props.head}</h4>

          <div className="main-text mb-6 space-y-3">
            {renderText(props.content)}
          </div>

          <div className="text-right">
            <Button 
              className="inline-block"
              link={props.link}
              text="Read More"
            />
          </div>
        </div>
      </div>

      <div>
        {props.image && (
          <img 
            src={props.image} 
            alt={props.head} 
            className="min-w-[254px] h-[487px]"
          />
        )}
      </div>
    </div>
  );
}
