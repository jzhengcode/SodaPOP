CREATE DATABASE sodapop;

CREATE TABLE beverages (
  id SERIAL,
  date DATE,
  username varchar(15),
  beverage VARCHAR(10),
  gramSugar INT,
  calorie INT
);