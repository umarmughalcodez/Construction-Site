/*
  Warnings:

  - The `imageUrl` column on the `Projects` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `imageUrl` column on the `Services` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Projects" ADD COLUMN     "Category" TEXT,
ADD COLUMN     "DateCompleted" TIMESTAMP(3),
ADD COLUMN     "clientName" TEXT,
DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];

-- AlterTable
ALTER TABLE "public"."Services" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];
