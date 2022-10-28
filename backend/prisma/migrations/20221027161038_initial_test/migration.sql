/*
  Warnings:

  - Added the required column `userType` to the `Auth` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "USERTYPE" AS ENUM ('STUDENT', 'FACULTY', 'INSTITUTION');

-- AlterTable
ALTER TABLE "Auth" ADD COLUMN     "userType" "USERTYPE" NOT NULL;

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "country" TEXT,
    "streetAddress" TEXT,
    "City" TEXT,
    "State" TEXT,
    "PostalAddress" TEXT,
    "authId" INTEGER,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College" (
    "id" TEXT NOT NULL,
    "collegeName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "streetAddress" TEXT,
    "city" TEXT,
    "state" TEXT,
    "authId" INTEGER,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "website" TEXT,
    "About" TEXT NOT NULL,
    "Photo" TEXT,
    "authId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_authId_key" ON "Student"("authId");

-- CreateIndex
CREATE UNIQUE INDEX "College_authId_key" ON "College"("authId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_authId_key" ON "Profile"("authId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_authId_fkey" FOREIGN KEY ("authId") REFERENCES "Auth"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_authId_fkey" FOREIGN KEY ("authId") REFERENCES "Auth"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_authId_fkey" FOREIGN KEY ("authId") REFERENCES "Auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
