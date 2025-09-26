/*
  Warnings:

  - You are about to drop the column `image_url` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Made the column `imageUrl` on table `Services` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Projects" DROP COLUMN "image_url",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Services" ALTER COLUMN "imageUrl" SET NOT NULL;
