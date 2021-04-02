const licensePicked = require("./index.js")
let license = licensePicked;
let link;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// function renderLicenseBadgeAndLink(license) {}
    
switch(license) {
    case "MIT":
        link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
    case "GPLv2":
        link = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        break;
    case "Apache":
        link = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
    case "LGPLv3":
        link = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        break;
    case "none":
        link = "";
        break;
    default:
        console.log("please check your inputs");   
}    
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  data.licenseBadge = link;
  
  return `# ${data.project-title}

  ${data.licenseBadge}
  
  ## Description
  ***
  ${data.description}

  ## Table of Contents 
  ***
  * [Description](#description)
  * [Installation Instructions](#installation instructions)
  * [Usage Info](#usage info)
  * [Contribution Guidelines](#contribution guidelines)
  * [Test Instructions](#test instructions)
  * [License](#license)
  * [Questions](#questions)

  ## Installation Instructions
  ***
  To install dependencies for this application, you can run the following:
  \`
  ${data.installationInstructions}
  \`

  ## Usage Info
  ***
  ${data.usageInfo}

  ## Contribution Guidelines
  ***
  ${data.contributionGuidelines}

  ## Test Instructions
  ***
  To run tests for this application, you can run the following:
  \`
  ${data.testInstructions}
  \`

  ## License
  ***
  This repository is licensed under the ${data.license} license.

  ## Credits
  ***
  ${data.credits}

  ## Questions
  ***
  Should you have any questions about my repository you can contact me at:
  * [https://github.com/${data.githubUsername}/](https://github.com/${data.githubUsername}/)
  * [mailto](${data.email})
`;
}

module.exports = generateMarkdown();