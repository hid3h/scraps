import { findScrap } from "@/app/services/find-scrap-service";
import ScrapHeading from "./ScrapHeading";
import { AddScrapCommentForm } from "./add-scrap-comment-form";

export default async function Scrap({ params }: { params: { id: string } }) {
  const { scrap, scrapComments } = await findScrap({
    id: params.id,
  });

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm">
        <ScrapHeading scrap={scrap} />
        <ul role="list" className="space-y-3">
          {scrapComments.map((scrapComment) => (
            <li
              key={scrapComment.id}
              className="overflow-hidden bg-white py-4 shadow rounded-md px-6"
            >
              {scrapComment.content}
            </li>
          ))}
        </ul>
        <AddScrapCommentForm />
      </div>
    </div>
  );
}
