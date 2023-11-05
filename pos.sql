CREATE TABLE `Category` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50),
  `image` VARCHAR(50)
);

CREATE TABLE `Product` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50),
  `importprice` DECIMAL,
  `retailprice` DECIMAL,
  `quantity` INT,
  `barcode` VARCHAR(100),
  `image` VARCHAR(50),
  `categoryid` INT,
  `createdAt` VARCHAR(50)
);

CREATE TABLE `Customer` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50),
  `phone` VARCHAR(20),
  `address` VARCHAR(50)
);

CREATE TABLE `User` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  `address` VARCHAR(10) NOT NULL,
  `username` VARCHAR(50),
  `password` VARCHAR(100),
  `gender` INT,
  `role` VARCHAR(20),
  `createdAt` VARCHAR(50),
  `status` INT
);



CREATE TABLE `Order` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `totalprice` DECIMAL,
  `createdAt` VARCHAR(50),
  `status` INT,
  `customerId` INT
);

CREATE TABLE `Orderdetail` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `orderid` INT,
  `productid` INT,
  `quantity` INT,
  `price` DECIMAL
);

ALTER TABLE `Product` ADD FOREIGN KEY (`categoryid`) REFERENCES `Category` (`id`);

ALTER TABLE `Order` ADD FOREIGN KEY (`customerId`) REFERENCES `Customer` (`id`);

ALTER TABLE `Orderdetail` ADD FOREIGN KEY (`orderid`) REFERENCES `Order` (`id`);

ALTER TABLE `Orderdetail` ADD FOREIGN KEY (`productid`) REFERENCES `Product` (`id`);

