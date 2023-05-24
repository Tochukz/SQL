    
USE oluchi_db;

CREATE TABLE `rank` (
  `Rank` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Name` VARCHAR(200),
  `Platform` VARCHAR(60),
  `Year` SMALLINT,
  `Genre` VARCHAR(60),
  `Publisher` VARCHAR(60),
  `NA_Sales` FLOAT,
  `EU_Sales` FLOAT,
  `JP_Sales` FLOAT,
  `Other_Sales` FLOAT
);