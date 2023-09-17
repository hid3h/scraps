import prisma from "@/db";
import { authOptions } from "@/lib/next-auth";
import { getServerSession } from "next-auth";

export const findScrap = async ({ id }: { id: string }) => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  console.log("userEmail", userEmail);
  console.log("findScrap");
  //     email: userEmail,
  //   },
  // });

  // TODO: scrapsをfind
  const scrapComments = [
    {
      id: "1",
      content: "コメント1",
      createdAt: "2021-10-10T00:00:00Z",
      updatedAt: "2021-10-10T00:00:00Z",
    },
    {
      id: "2",
      content: "コメント2",
      createdAt: "2021-10-10T00:00:00Z",
      updatedAt: "2021-10-10T00:00:00Z",
    },
  ];

  return {
    scrap: {
      id: "hoge",
      title: "スクラップタイトル",
    },
    scrapComments,
  };
};
