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
  });