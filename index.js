const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Describe your project?",
    name: "Description",
  },
  {
    type: "input",
    message: "Describe the installation process?",
    name: "Installation",
  },
  {
    type: "input",
    message: "Describe how to use your project?",
    name: "Usage",
  },
  {
    type: "input",
    message: "Enter your license.",
    name: "License",
  },
  {
    type: "input",
    message: "Are you open to contributors?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "How did you test your project?",
    name: "Tests",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "User name",
  },
  {
    type: "input",
    message: "What is your email.",
    name: "Email",
  }

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Successfully Created!');
  });
}


// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {

    const data = generateMarkdown(answers); 
    console.log(answers);
  
    writeToFile("./utils/Readme.md", data);
  })
}

// function call to initialize program
init();
