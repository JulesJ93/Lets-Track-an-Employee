const inquirer = require('inquirer');
const cTable = require('console.table');



inquirer
  .prompt([
    {
      type: 'list',
      name: 'directory',
      message: 'What would you like to view?',
      choices: ['View All Employees', 'Add Employee','Update Employee Role','View All Roles','Add Role','View All Departments','Add Department'],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.directory);

    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Employee name?',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter the manager's name!");
            return false; 
        }
    }
},
{
  type: 'input',
  name: 'id',
  message: "Please enter the manager's ID.",
  validate: nameInput => {
      if  (isNaN(nameInput)) {
          console.log ("Please enter the employee's ID!")
          return false; 
      } else {
          return true;
      }
  }
},
{
  type: 'input',
  name: 'email',
  message: "Please enter the employees role.",
  validate: email => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (valid) {
          return true;
      } else {
          console.log ('Please enter an email!')
          return false; 
      }
  }
},
{
    type: 'input',
    name: 'officeNumber',
    message: "Please enter the employees salary.",
    validate: nameInput => {
        if  (isNaN(nameInput)) {
            console.log ("Please enter managers office number!")
            return false; 
        } else {
            return true;
        }
    }
  },
])
  });



  //call the table for const ctable
  console.table([
    {
      name: 'foo',
      age: 10
    }, {
      name: 'bar',
      age: 20
    }
  ]);

  const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employeeTracker_db'
});

// simple query
connection.query(
  'SELECT * FROM `Department` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
connection.query(
    'SELECT * FROM `Role` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
connection.query(
    'SELECT * FROM `Employee` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );