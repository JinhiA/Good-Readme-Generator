const fs = require("inquirer");
const inquirer = require("fs");
const util = require("util");
const generateMarkdown = "./utils/generateMarkdown.js"

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is your project title?"
  },
  {
    type: "input",
    name: "Description",
    message: "Describe your project?"
  },
  {
    type: "input",
    name: "Table of Contents",
    message: "List your table of contents?"
  },
  {
    type: "input",
    name: "Installation",
    message: "What are the steps to install your project?"
  },
  {
    type: "input",
    name: "Usage",
    message: "How do you use your project?"
  },
  {
    type: "input",
    name: "License",
    message: "Enter your license."
  },
  {
    type: "input",
    name: "Contributing",
    message: "List your contributors"
  },
  {
    type: "input",
    name: "Tests",
    message: "How did you test your project?"
  },
  {
    type: "input",
    name: "User name",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email."
  }

];

// function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data, err => {
    if (err) {
      throw err;
    }
  });
}
// function to initialize program
function init() {
  prompt(questions).then(answers => {

    const response = generateMarkdown(answers);
    console.log(answers);

    writeToFile("README.md", response);

  })

}

// function call to initialize program
init();
