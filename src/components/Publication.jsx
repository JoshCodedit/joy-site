import Button from "./Button";

export default function Publication(props) {
  const maxLength = 429;
  const truncatedSummary =
    props.summary.length > maxLength
      ? props.summary.slice(0, maxLength).trim() + "..."
      : props.summary;

  return (
    <div className="relative w-[280px] mx-auto group cursor-pointer">
      <img
        src={props.cover}
        alt={props.title}
        className="w-full h-auto object-cover transition duration-300 ease-in-out group-hover:brightness-[20%]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out px-4">
        <p className="text-[16px] mb-3">{truncatedSummary}</p>
        {props.link && (
          <Button
            link={props.link}
            target="_blank"
            rel="noopener noreferrer"
            text="View"
          />
        )}
      </div>
    </div>
  );
}
