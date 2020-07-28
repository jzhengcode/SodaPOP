CREATE DATABASE sodapop;

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(20),
  password VARCHAR
)

CREATE TABLE beverages (
  id SERIAL,
  date DATE,
  username VARCHAR(20),
  beverage VARCHAR(10),
  gramSugar INT,
  calorie INT
);