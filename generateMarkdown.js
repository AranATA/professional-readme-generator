
let link;

function renderLicenseBadgeAndLink(license) {
    
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

return link;
}

function generateMarkdown(data) {
    
  return `<br>
  
  ## &emsp; **${data.projectTitle}**

  ![alt text](assets/images/red.png)
  <br>
  
  &emsp;&ensp; ${renderLicenseBadgeAndLink(data.license)}
  <br>
  <br>
  <br>
    
  ### &emsp; TABLE OF CONTENTS
  <br>

  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage Info](#usage-info)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [License](#license)
  * [Credits](#credits)
  * [Questions](#questions)
  <br>
  <br>
  <br>
  
  ### &emsp; DESCRIPTION
    
  ${data.description}
  <br>
  <br>
  <br>

  ### &emsp; INSTALLATION INSTRUCTIONS
  
  To install dependencies for this application you can run the following:
  
   \`${data.installationInstructions}\`
  <br>
  <br>
  <br>

  ### &emsp; USAGE INFO
  
  ${data.usageInfo}
  <br>
  <br>
  <br>

  ### &emsp; CONTRIBUTION GUIDELINES
    
  ${data.contributionGuidelines}
  <br>
  <br>
  <br>

  ### &emsp; TEST INSTRUCTIONS
  
  To run tests for this application you can run the following:

  \`${data.testInstructions}\`
  <br>
  <br>
  <br>

  ### &emsp; LICENSE
 
  This repository is licensed under the \`${data.license}\` license. Click the badge for details. 
  
  ${renderLicenseBadgeAndLink(data.license)}
  <br>
  <br>
  <br>

  ### &emsp; CREDITS
  
  This project was made possible with the support and collaboration of:

  ${data.credits}
  <br>
  <br>
  <br>

  ### &emsp; QUESTIONS

  Should you have any questions about my repository you can contact us at:
  * [https://github.com/${data.githubUsername}/](https://github.com/${data.githubUsername}/)
  * [${data.email}](mailto:${data.email})
  <br>
  <br>
  <br>

  ![alt text](assets/images/blue.png)
  <br>

  &emsp;&ensp;![alt text](assets/images/gb-b.jpg)&emsp;by ghibli
    
`;
}

module.exports = generateMarkdown;