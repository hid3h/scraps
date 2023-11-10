import { findScrap } from "@/app/lib/data";
import { ScrapHeading } from "./ScrapHeading";
import { AddScrapCommentForm } from "./add-scrap-comment-form";
import CommentCardMenu from "./CommentCardMenu";
import { AppMarkdown } from "@/app/_components/AppMarkdown";
import { fetchCurrentUser } from "@/auth";

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

  const currentUser = await fetchCurrentUser();
  const enabledScrapCommentForm = scrap.userId === currentUser?.id;

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
              <AppMarkdown body={scrapComment.body} />
            </div>
          ))}
        </div>
        <AddScrapCommentForm scrap={scrap} enabled={enabledScrapCommentForm} />
      </div>
    </div>
  );
}
