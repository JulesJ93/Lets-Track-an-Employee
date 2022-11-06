DROP DATABASE IF EXISTS EmployeeTracker_db;
CREATE DATABASE EmployeeTracker_db;

USE EmployeeTracker_db;

CREATE TABLE departments (
  id INT PRIMARY KEY,
  department_name VARCHAR(30)
);

CREATE TABLE roles (
  id INT,
  role_title VARCHAR(30) NOT NULL,
  role_salary DECIMAL,
  order_details TEXT,
  department_id INT,
);

CREATE TABLE employees (
    id  INT PRIMARY KEY,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT
);


