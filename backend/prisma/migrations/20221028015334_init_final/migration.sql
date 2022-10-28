/*
  Warnings:

  - Added the required column `email` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pending` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamName` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "pending" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "teamName" TEXT NOT NULL;
