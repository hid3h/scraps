// https://nextjs.org/learn/dashboard-app/fetching-data
// ここでapp/lib/dataにつくっていたのでそうしている

import prisma from "@/db";

export const findScrap = async ({ id }: { id: string }) => {
  const scrapPosting = await prisma.scrapPosting.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      user: true,
      scrapCommentings: true,
    },
  });
  return scrapPosting;
};
