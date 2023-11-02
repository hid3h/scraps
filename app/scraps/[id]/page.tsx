import { findScrap } from "@/app/lib/data";
import ScrapHeading from "./ScrapHeading";
import { AddScrapCommentForm } from "./add-scrap-comment-form";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default async function Scrap({ params }: { params: { id: string } }) {
  const scrap = await findScrap({
    id: params.id,
  });

  const displayComment = (comment: string) => {
    console.log("comment", comment);
    return comment;
  };

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm">
        <ScrapHeading scrap={scrap} />
        <ul role="list" className="space-y-3">
          {scrap.scrapCommentings.map((scrapComment) => (
            <li
              key={scrapComment.id}
              className="overflow-hidden bg-white py-4 shadow rounded-md px-6"
            >
              <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {displayComment(scrapComment.body)}
              </Markdown>
            </li>
          ))}
        </ul>
        <AddScrapCommentForm scrap={scrap} />
      </div>
    </div>
  );
}
