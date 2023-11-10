-- CreateTable
CREATE TABLE "system_initial_user_screen_namings" (
    "id" TEXT NOT NULL,
    "screen_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "system_initial_user_screen_namings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "system_initial_user_screen_namings_screen_name_key" ON "system_initial_user_screen_namings"("screen_name");

-- CreateIndex
CREATE UNIQUE INDEX "system_initial_user_screen_namings_user_id_key" ON "system_initial_user_screen_namings"("user_id");

-- AddForeignKey
ALTER TABLE "system_initial_user_screen_namings" ADD CONSTRAINT "system_initial_user_screen_namings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
