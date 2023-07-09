/*
  Warnings:

  - You are about to drop the column `foodType` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `foodImage` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Restaurant` DROP COLUMN `foodType`,
    ADD COLUMN `foodImage` VARCHAR(191) NOT NULL,
    MODIFY `rating` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `FoodType` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FoodTypeToRestaurant` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FoodTypeToRestaurant_AB_unique`(`A`, `B`),
    INDEX `_FoodTypeToRestaurant_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FoodTypeToRestaurant` ADD CONSTRAINT `_FoodTypeToRestaurant_A_fkey` FOREIGN KEY (`A`) REFERENCES `FoodType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FoodTypeToRestaurant` ADD CONSTRAINT `_FoodTypeToRestaurant_B_fkey` FOREIGN KEY (`B`) REFERENCES `Restaurant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
