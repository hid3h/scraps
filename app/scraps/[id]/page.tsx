import { findScrap } from "@/app/lib/data";
import ScrapHeading from "./ScrapHeading";
import { AddScrapCommentForm } from "./add-scrap-comment-form";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import CommentCardMenu from "./CommentCardMenu";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const scrap = await findScrap({
    id: params.id,
  });
  return {
    title: scrap.title,
  };
}

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
        <div role="list" className="space-y-3">
          {scrap.scrapCommentings.map((scrapComment) => (
            <div
              key={scrapComment.id}
              className="bg-white py-4 shadow rounded-md px-6"
            >
              <div className="flex justify-end">
                <CommentCardMenu />
              </div>
              <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {displayComment(scrapComment.body)}
              </Markdown>
            </div>
          ))}
        </div>
        <AddScrapCommentForm scrap={scrap} />
      </div>
    </div>
  );
}
