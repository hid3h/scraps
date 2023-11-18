-- CreateTable
CREATE TABLE "scrap_comment_editings" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "edited_at" TIMESTAMP(3) NOT NULL,
    "scrap_commenting_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scrap_comment_editings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scrap_comment_editings" ADD CONSTRAINT "scrap_comment_editings_scrap_commenting_id_fkey" FOREIGN KEY ("scrap_commenting_id") REFERENCES "scrap_commentings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
