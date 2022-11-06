const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require("mysql2");








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