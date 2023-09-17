import prisma from "@/db";
import { z } from "zod";

export const createScrapSchema = z.object({
  title: z.string(),
});

export const createScrap = async ({
  title,
}: {
  title: string;
}) => {

  // TODO: scrapsをsave
  return {
    id: "hoge",
  };
};
