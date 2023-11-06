/*
  Warnings:

  - You are about to drop the column `user_id` on the `scrap_comment_deletings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "scrap_comment_deletings" DROP CONSTRAINT "scrap_comment_deletings_user_id_fkey";

-- AlterTable
ALTER TABLE "scrap_comment_deletings" DROP COLUMN "user_id";
