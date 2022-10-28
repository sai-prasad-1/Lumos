/*
  Warnings:

  - You are about to drop the column `authId` on the `College` table. All the data in the column will be lost.
  - You are about to drop the column `City` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `PostalAddress` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `State` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `authId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `streetAddress` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `userType` on the `Auth` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `email` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Designation` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collegeName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `githubUsername` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "College" DROP CONSTRAINT "College_authId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_authId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_authId_fkey";

-- DropIndex
DROP INDEX "College_authId_key";

-- DropIndex
DROP INDEX "Student_authId_key";

-- AlterTable
ALTER TABLE "Auth" DROP COLUMN "userType",
ADD COLUMN     "userType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "College" DROP COLUMN "authId",
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "City",
DROP COLUMN "PostalAddress",
DROP COLUMN "State",
DROP COLUMN "authId",
DROP COLUMN "country",
DROP COLUMN "streetAddress",
ADD COLUMN     "Designation" TEXT NOT NULL,
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "collegeName" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "githubUsername" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- DropEnum
DROP TYPE "USERTYPE";

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "competition" TEXT,
    "designation" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repositories" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Repositories_pkey" PRIMARY KEY ("id")
);
