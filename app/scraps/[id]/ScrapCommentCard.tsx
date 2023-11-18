import { AppMarkdown } from "@/app/_components/AppMarkdown";

export const ScrapCommentCard = ({
  scrapCommentingId,
  isDisplayCommentMenu,
  commentedAtStr,
  commentBody,
}: {
  scrapCommentingId: string;
  isDisplayCommentMenu: boolean;
  commentedAtStr: string;
  commentBody: string;
}) => {
  const formAction = deleteScrapComment.bind(null, scrapComment.id);

  return (
    <div className="bg-white py-4 shadow rounded-md px-6 break-words">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">{commentedAtStr}</div>
        {isDisplayCommentMenu && (
          <CommentCardMenu scrapCommentId={scrapComment.id} />
        )}
      </div>
      <div className="mt-2">
        <AppMarkdown body={commentBody} />
      </div>
    </div>
  );
};
