// https://nextjs.org/learn/dashboard-app/fetching-data
// ここでapp/lib/dataにつくっていたのでそうしている

import { findCurrentUser } from "@/auth";
import prisma from "@/db";
import { User } from "@prisma/client";

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
  const currentUser = await findCurrentUser();
  return commonScrapSummary({ userId: currentUser.id });
};

export const fetchUserScrapSummary = async ({ user }: { user: User }) => {
  return commonScrapSummary({ userId: user.id });
};

const commonScrapSummary = async ({ userId }: { userId: string }) => {
  const scrapPostings = await prisma.scrapPosting.findMany({
    where: {
      userId,
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

export const fetchUser = async ({ screenName }: { screenName: string }) => {
  const systemInitialUserScreenNaming =
    await prisma.systemInitialUserScreenNaming.findUniqueOrThrow({
      where: {
        screenName,
      },
      include: {
        user: true,
      },
    });
  return systemInitialUserScreenNaming.user;
};
