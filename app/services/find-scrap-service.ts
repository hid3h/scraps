
export const findScrap = async ({ id }: { id: string }) => {

  // TODO: scrapsをfind
  const scrapComments = [
    {
      id: "1",
      content: "コメント1 http://example.com",
      createdAt: "2021-10-10T00:00:00Z",
      updatedAt: "2021-10-10T00:00:00Z",
    },
    {
      id: "2",
      content: "コメント2 <scropt>alert('hoge')</scropt>",
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
