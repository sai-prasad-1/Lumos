-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "collegId" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_collegId_fkey" FOREIGN KEY ("collegId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
