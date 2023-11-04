// https://nextjs.org/learn/dashboard-app/mutating-data
// これでlib/actionsにつくっていたのでそうしている
"use server";

import { fetchCurrentUser, signOut } from "@/auth";
import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ScrapSchema = z.object({
  title: z.string().min(1),
});

export async function postScrap(formData: FormData) {
  const currentUser = await fetchCurrentUser();
  const { title } = ScrapSchema.parse({
    title: formData.get("title"),
  });
  const scrapPosting = await prisma.scrapPosting.create({
    data: {
      title,
      postedAt: new Date(),
      user: {
        connect: {
          id: currentUser.id,
        },
      },
    },
  });
  redirect(`/scraps/${scrapPosting.id}`);
}

const ScrapCommentSchema = z.object({
  body: z.string().min(1),
});

export async function addScrapComment(scrapId: string, formData: FormData) {
  const currentUser = await fetchCurrentUser();
  const { body } = ScrapCommentSchema.parse({
    body: formData.get("body"),
  });
  await prisma.scrapCommenting.create({
    data: {
      body,
      commentedAt: new Date(),
      user: {
        connect: {
          id: currentUser.id,
        },
      },
      scrapPosting: {
        connect: {
          id: scrapId,
        },
      },
    },
  });
  revalidatePath(`/`);
}

export const logout = async () => {
  await signOut();
};
