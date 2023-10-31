-- CreateTable
CREATE TABLE `scrap_postings` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `posted_at` DATETIME(3) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scrap_commentings` (
    `id` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `commented_at` DATETIME(3) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `scrap_posting_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `scrap_postings` ADD CONSTRAINT `scrap_postings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scrap_commentings` ADD CONSTRAINT `scrap_commentings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scrap_commentings` ADD CONSTRAINT `scrap_commentings_scrap_posting_id_fkey` FOREIGN KEY (`scrap_posting_id`) REFERENCES `scrap_postings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
