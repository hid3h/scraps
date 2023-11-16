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
  const isScrapOwner = scrap.userId === currentUser?.id;
  const enabledScrapCommentForm = isScrapOwner;
  const isDisplayScrapMenu = isScrapOwner;
  const isDisplayCommentMenu = isScrapOwner;

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm w-full">
        <ScrapHeading scrap={scrap} isDisplayScrapMenu={isDisplayScrapMenu} />
        <div role="list" className="space-y-3">
          {scrap.scrapCommentings.map((scrapComment) => (
            <div
              key={scrapComment.id}
              className="bg-white py-4 shadow rounded-md px-6 break-words"
            >
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {scrapComment.commentedAtStr}
                </div>
                {isDisplayCommentMenu && (
                  <CommentCardMenu scrapCommentId={scrapComment.id} />
                )}
              </div>
              <div className="mt-2">
                <AppMarkdown body={scrapComment.body} />
              </div>
            </div>
          ))}
        </div>
        <AddScrapCommentForm scrap={scrap} enabled={enabledScrapCommentForm} />
      </div>
    </div>
  );
}
