-- CreateTable
CREATE TABLE `school` (
    `school_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`school_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `student_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `day_of_birth` DATETIME(3) NOT NULL,
    `school_id` INTEGER NOT NULL,

    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_school_id_fkey` FOREIGN KEY (`school_id`) REFERENCES `school`(`school_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
