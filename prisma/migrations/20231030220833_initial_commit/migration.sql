-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT NOT NULL,
    "favSpiritId" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spirit" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "spirit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_favSpiritId_fkey" FOREIGN KEY ("favSpiritId") REFERENCES "spirit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
