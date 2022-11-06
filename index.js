const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What would you like to do ?'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });