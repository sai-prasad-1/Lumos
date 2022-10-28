/*
  Warnings:

  - You are about to drop the `Repositories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Repositories" DROP CONSTRAINT "Repositories_userId_fkey";

-- DropTable
DROP TABLE "Repositories";
