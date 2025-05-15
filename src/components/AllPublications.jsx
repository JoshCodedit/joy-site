import publications from "../../public/docs/publications.json";
import Publication from "./Publication";

export default function AllPublications() {
  return (
    <div className="mb-20">
      <h2 className="section-header text-center my-12">All Publications</h2>
      <div className="flex justify-between w-[1200px] m-auto">
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
