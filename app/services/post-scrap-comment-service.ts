import prisma from "@/db";
import { fetchCurrentUser } from "@/auth";
import { z } from "zod";

export const postScrapCommentSchema = z.object({
  id: z.string(),
  body: z.string(),
});

type Type = z.infer<typeof postScrapCommentSchema>;

export const postScrapComment = async ({ id, body }: Type) => {
  console.log("postScrapComment", id, body);
  const currentUser = await fetchCurrentUser();
  console.log("currentUser", currentUser);
};
