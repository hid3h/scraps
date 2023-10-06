"use server";

import { postScrapComment } from "@/app/services/post-scrap-comment-service";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function postScrapCommentAction(
  prevState: any,
  formData: FormData
) {
  const postScrapCommentSchema = z.object({
    body: z.string(),
  });
  const parsed = postScrapCommentSchema.parse({
    body: formData.get("body"),
  });

  // 1秒待つ
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    await postScrapComment({
      id: "scrapId",
      body: parsed.body,
    });
    return revalidatePath("/");
  } catch (error) {
    console.error("error", error);
    // TODO
    return { message: "Failed to create" };
  }
}
