// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js")();
// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
    {
        type: "editor",
        name: "description",
        message: "How would you describe your project?",
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "What command should be run to install dependencies in your application?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usageInfo",
        message: "How can someone make use of your application?",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "What does a user need to know about contributing to your repo?",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What command should be run to run tests for your application?",
        default: "npm run test"
    },
    {
        type: "list",
        name: "license",
        message: "Which one is your application's license?",
        choices: ["MIT", "GPLv2", "Apache", "LGPLv3", "none"]
    },
    {
        type: "input",
        name: "credits",
        message: "To whom would you like to give credit for this project?",
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function writeToFile (fileName, answers) {

inquirer
    .prompt(questions)
    .then((answers) => {
        const pageContentReady = generateMarkdown(answers);
               
        fs.writeFile(fileName, pageContentReady, (err) =>
            err ? console.log(err) : console.log("Successfully created your file!")
        );
    });  
}

exports.license = `${answers.license}`;

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to your professional README generator.\nPlease answer the following questions:")
    writeToFile("README.md", answers);
}

// Function call to initialize app
init();