// function to generate markdown for README
function generateMarkdown(data) { 
  return `
# ${data.Title}

## Description
${data.Description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
This repository is licensed under the ${data.License} license.

## Contributing
${data.Contributor}

## Tests
${data.Tests}


## Questions
If you have questions about this repository reach me by Github: [${data.userName}](https://github.com/${data.userName})
or send an email: ${data.Email} 
`;
}

module.exports = generateMarkdown;
