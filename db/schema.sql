DROP DATABASE IF EXISTS EmployeeTracker_db;
CREATE DATABASE EmployeeTracker_db;

USE EmployeeTracker_db;

CREATE TABLE departments (
  id INT PRIMARY KEY,
  department_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT,
  role_title VARCHAR(30) NOT NULL,
  role_salary DECIMAL,
  order_details TEXT,
  department_id INT,
);

CREATE TABLE employees (

    
)