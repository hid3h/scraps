import { findScrap } from "@/app/services/find-scrap-service";
import ScrapHeading from "./ScrapHeading";
import { AddScrapCommentForm } from "./add-scrap-comment-form";
import linkifyHtml from "linkify-html";

export default async function Scrap({ params }: { params: { id: string } }) {
  const { scrap, scrapComments } = await findScrap({
    id: params.id,
  });

  const displayComment = (comment: string) => {
    const html = linkifyHtml(comment, {
      className: "text-indigo-600 hover:underline",
      target: "_blank",
    });

    return (
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

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
              {displayComment(scrapComment.content)}
            </li>
          ))}
        </ul>
        <AddScrapCommentForm />
      </div>
    </div>
  );
}
