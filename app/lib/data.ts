// https://nextjs.org/learn/dashboard-app/fetching-data
// ここでapp/lib/dataにつくっていたのでそうしている

import { fetchCurrentUser } from "@/auth";
import prisma from "@/db";

export const findScrap = async ({ id }: { id: string }) => {
  const scrapPosting = await prisma.scrapPosting.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      user: true,
      scrapCommentings: {
        where: {
          scrapCommentDeletings: {
            none: {},
          },
        },
      },
    },
  });
  return scrapPosting;
};

export const fetchScrapSummary = async () => {
  const currentUser = await fetchCurrentUser();
  const scrapPostings = await prisma.scrapPosting.findMany({
    where: {
      userId: currentUser.id,
    },
    include: {
      scrapCommentings: true,
    },
    orderBy: {
      postedAt: "desc",
    },
  });
  return scrapPostings.map((scrapPosting) => {
    return {
      id: scrapPosting.id,
      title: scrapPosting.title,
      postedAt: scrapPosting.postedAt.toISOString(),
      commentCount: scrapPosting.scrapCommentings.length,
    };
  });
};
