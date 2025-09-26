/*
  Warnings:

  - You are about to drop the column `Category` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `DateCompleted` on the `Projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Projects" DROP COLUMN "Category",
DROP COLUMN "DateCompleted",
ADD COLUMN     "category" TEXT DEFAULT 'none',
ADD COLUMN     "dateCompleted" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
