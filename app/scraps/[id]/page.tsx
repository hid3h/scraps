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

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm w-full">
        <ScrapHeading scrap={scrap} />
        <div role="list" className="space-y-3">
          {scrap.scrapCommentings.map((scrapComment) => (
            <div
              key={scrapComment.id}
              className="bg-white py-4 shadow rounded-md px-6 break-words"
            >
              <div className="flex justify-end">
                <CommentCardMenu scrapCommentId={scrapComment.id} />
              </div>
              <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {scrapComment.body}
              </Markdown>
            </div>
          ))}
        </div>
        <AddScrapCommentForm scrap={scrap} />
      </div>
    </div>
  );
}
