-- CreateTable
CREATE TABLE "scrap_comment_deletings" (
    "id" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "scrap_commenting_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scrap_comment_deletings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scrap_comment_deletings" ADD CONSTRAINT "scrap_comment_deletings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scrap_comment_deletings" ADD CONSTRAINT "scrap_comment_deletings_scrap_commenting_id_fkey" FOREIGN KEY ("scrap_commenting_id") REFERENCES "scrap_commentings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
