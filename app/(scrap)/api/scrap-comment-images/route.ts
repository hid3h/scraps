export async function POST(request: Request) {
  const formData = await request.formData();
  console.log("formData", formData);
  const imageFile = formData.get("file");
  return Response.json({
    imageUrl:
      "https://www.img-ikyu.com/contents/common/image/acc5/00002645/1/org/12476672.jpg?auto=compress,format&lossless=0&w=560&h=370",
  });
}
