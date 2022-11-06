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