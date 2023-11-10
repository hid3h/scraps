-- CreateTable
CREATE TABLE "scrap_deletings" (
    "id" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "scrap_posting_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scrap_deletings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scrap_deletings" ADD CONSTRAINT "scrap_deletings_scrap_posting_id_fkey" FOREIGN KEY ("scrap_posting_id") REFERENCES "scrap_postings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
