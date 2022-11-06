--assigned values to department names
INSERT INTO Department (department_name )
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");
--this is the role seed       
INSERT INTO Role (role_title,role_salary,department_id)
VALUES ("Sales Lead",100000,"Sales")
       ("Salesperson",80000,"Sales" )
       ("Lead Engineer",150000,"Engineering")
       ("Software Engineer",120000,"Engineering")
       ("Account Manager",160000,"Finance")
       ("Accountant",125000,"Finance")
       ("Legal Team Lead",250000,"Legal")
       ("Lawyer",190000,"Legal");
--this is the employee seed
INSERT INTO employees (first_name,last_name,role_id,manager_id)
VALUES ("John","Doe","Sales Lead", "null")
       ("Mike","Chan","Salesperson","John Doe")
       ("Ashley","Rodriguez","Lead Engineer","null")
       ("Kevin","Tupik","Software Engineer","Ashley Rodriguez")
       ("Kunal","Singh","Account Manager","null")
       ("Malia","Brown","Accountant","Kunal Singh")
       ("Sarah","Lourd","Legal Team Lead","null")
       ("Tom","Allen","Lawyer","Sarah Lourd");