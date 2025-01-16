-- CreateTable
CREATE TABLE "info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "about_me" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ed_from" TEXT NOT NULL,
    "ed_to" TEXT NOT NULL,
    "caption" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "hard_skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skill" TEXT NOT NULL,
    "caption" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "soft_skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skill" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT NOT NULL,
    "level" TEXT NOT NULL
);
