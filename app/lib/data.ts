// https://nextjs.org/learn/dashboard-app/fetching-data
// ここでapp/lib/dataにつくっていたのでそうしている

import { findCurrentUser } from "@/auth";
import prisma from "@/db";
import { User } from "@prisma/client";
import { Temporal } from "@js-temporal/polyfill";

const toZnedDateTime = (date: Date) => {
  return Temporal.Instant.from(date.toISOString()).toZonedDateTimeISO(
    "Asia/Tokyo"
  );
};

export const findScrap = async ({ id }: { id: string }) => {
  const scrapPosting = await prisma.scrapPosting.findUniqueOrThrow({
    where: {
      id,
      scrapDeletings: {
        none: {},
      },
    },
    include: {
      user: true,
      scrapCommentings: {
        where: {
          scrapCommentDeletings: {
            none: {},
          },
        },
        include: {
          scrapCommentEditings: {
            orderBy: {
              editedAt: "desc",
            },
            take: 1,
          },
        },
      },
    },
  });

  const postedAt = toZnedDateTime(scrapPosting.postedAt);

  const scrapCommentings = scrapPosting.scrapCommentings.map(
    (scrapCommenting) => {
      const commentedAt = toZnedDateTime(scrapCommenting.commentedAt);

      const body =
        scrapCommenting.scrapCommentEditings.length > 0
          ? scrapCommenting.scrapCommentEditings[0].body
          : scrapCommenting.body;
      return {
        id: scrapCommenting.id,
        body,
        commentedAtStr: `${commentedAt.toPlainDate()} ${commentedAt.hour}:${
          commentedAt.minute
        }`,
      };
    }
  );
  return {
    ...scrapPosting,
    postedAtStr: `${postedAt.toPlainDate()} ${postedAt.hour}:${
      postedAt.minute
    }`,
    scrapCommentings,
  };
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
      scrapDeletings: {
        none: {},
      },
    },
    include: {
      scrapCommentings: true,
    },
    orderBy: {
      postedAt: "desc",
    },
  });

  return scrapPostings.map((scrapPosting) => {
    const postedAt = toZnedDateTime(scrapPosting.postedAt);
    return {
      id: scrapPosting.id,
      title: scrapPosting.title,
      postedAt: `${postedAt.toPlainDate()} ${postedAt.hour}:${postedAt.minute}`,
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
