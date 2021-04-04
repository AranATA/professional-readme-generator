// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js");
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
        message: "How do users run your application?",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "What do developers need to know about contributing to your repo?",
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
    fs.writeFile(fileName, answers, (err) =>
    err ? console.log(err) : console.log("Successfully created your file in the generatedREADME folder!")
);
}

// exports.license = `${answers.license}`;

// TODO: Create a function to initialize app
function init() {
    console.log("Please answer the following questions:")
    inquirer
    .prompt(questions)
    .then((answers) => {
        const pageContentReady = generateMarkdown(answers);
    writeToFile("./generatedREADME/README.md", pageContentReady)        
    }); 

}

// Function call to initialize app
init();


// what kind of syntax is this:
// data.licenseBadge = licenseBadgeLinks[data.license];