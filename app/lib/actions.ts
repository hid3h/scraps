// https://nextjs.org/learn/dashboard-app/mutating-data
// これでlib/actionsにつくっていたのでそうしている
"use server";

import { fetchCurrentUser } from "@/auth";
import prisma from "@/db";
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
