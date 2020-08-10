-- Drops existing database
DROP DATABASE IF EXISTS burger_db;
-- Creates database
CREATE DATABASE burger_db;

USE burger_db;

-- Create burgers table
CREATE TABLE burgers 
(
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
);