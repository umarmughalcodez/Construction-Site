/*
  Warnings:

  - Made the column `clientName` on table `Projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `Projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Projects" ALTER COLUMN "clientName" SET NOT NULL,
ALTER COLUMN "category" SET NOT NULL;
