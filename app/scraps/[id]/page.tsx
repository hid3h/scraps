import { findScrap } from "@/app/lib/data";
import { ScrapHeading } from "./ScrapHeading";
import { AddScrapCommentForm } from "./add-scrap-comment-form";
import { fetchCurrentUser } from "@/auth";
import { ScrapCommentCard } from "./ScrapCommentCard";
import { SITE_TITLE } from "@/app/constant";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const scrap = await findScrap({
    id: params.id,
  });
  // TODO: descriptionとして内容をサマリ
  return {
    title: scrap.title,
    openGraph: {
      title: `${scrap.title} | ${SITE_TITLE}`,
      description: null,
    },
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
            <ScrapCommentCard
              key={scrapComment.id}
              scrapCommentingId={scrapComment.id}
              isDisplayCommentMenu={isDisplayCommentMenu}
              commentedAtStr={scrapComment.commentedAtStr}
              commentBody={scrapComment.body}
            />
          ))}
        </div>
        <AddScrapCommentForm scrap={scrap} enabled={enabledScrapCommentForm} />
      </div>
    </div>
  );
}
