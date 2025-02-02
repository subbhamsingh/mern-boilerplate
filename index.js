#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { Command } = require('commander'); // Import Command from commander
const shell = require('shelljs');

// Create a new Command instance
const program = new Command();

// Define the program
program
  .version('1.0.3')
  .description('A CLI tool to generate a MERN stack boilerplate')
  .argument('<project-name>', 'Name of the project')
  .action((projectName) => {
    // Create the project directory
    const projectPath = path.join(process.cwd(), projectName);
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`Error: Directory ${projectName} already exists.`));
      process.exit(1);
    }
    fs.mkdirSync(projectPath);

    // Copy the template files
    const templatePath = path.join(__dirname, 'template');
    shell.cp('-R', `${templatePath}/*`, projectPath);
    shell.cp('-R', `${templatePath}/.*`, projectPath); // Copy hidden files like .gitignore

    console.log(chalk.green(`MERN stack boilerplate created in ${projectName}!`));
    console.log(chalk.blue(`cd ${projectName}`));
    console.log(chalk.blue('Run `npm install` in both client and server folders.'));
  })
  .parse(process.argv);