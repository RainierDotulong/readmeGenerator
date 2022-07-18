// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const inquirer = require('inquirer')
const fs = require('fs')

function init() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'github',
				message: 'What is your Github username? (no @ needed)',
			},
			{
				type: 'input',
				name: 'repo',
				message: 'What is the name of your Github repo?',
			},
			{
				type: 'input',
				name: 'title',
				message: 'Title of your project: ',
			},
			{
				type: 'input',
				name: 'description',
				message: 'Write a description of your project',
			},
			{
				type: 'input',
				name: 'installation',
				message: 'if applicable, describe the steps to install your project',
			},
			{
				type: 'input',
				name: 'usage',
				message: 'Provide instructions and examples of your project',
			},
			{
				type: 'input',
				name: 'contributing',
				message:
					'If applicable, provide guidelines on how other developes can contribute to your project.',
			},
			{
				type: 'input',
				name: 'tests',
				message:
					'If applicable, provide any tests written for your application and provide examples on how to run them.',
			},
			{
				type: 'list',
				name: 'license',
				choices: [
					'GNU AGPLv3',
					'GNU GPLv3',
					'GNU LGPLv3',
					'Mozilla Public License 2.0',
					'Apache License 2.0',
					'MIT License',
					'Boost Software License 1.0',
					'The Unlicense',
					'NAN',
				],
				message: 'choose a license for your project.',
			},
		])
		.then(function (response) {
			let tableOfContents = '## Table of Contents'

			if (response.installation != '') {
				tableOfContents += `
* [Installation](#installation)`
			}
			if (response.usage != '') {
				tableOfContents += `
* [Usage](#usage)`
			}
			if (response.contributing != '') {
				tableOfContents += `
* [Contributing](#contributing)`
			}
			if (response.tests != '') {
				tableOfContents += `
* [tests](#tests)`
			}

			let markdown = `# ${response.title}
            
## Description
*The what, why, and how:*

${response.description}

`

			markdown += tableOfContents

			markdown += `
*[License](#license)`

			if (response.installation !== '') {
				markdown += `
## Installation
*Steps required to install project and how to get the development environment <running:></running:

${response.installation}`
			}

			if (response.usage !== '') {
				markdown += `
## Usage

*Instructions and examples for use:*

${response.usage}
`
			}
			if (response.contributing !== '') {
				markdown += `
## Contributing

*If you would like to contribute, follow these guidelines*

${response.contributing}
`
			}
			if (response.tests !== '') {
				markdown += `
## Tests

*Tests for application and how to run them*

${response.tests}
`
			}
			markdown += `
## License
${response.license}
`
			console.log(markdown)

			fs.writeFile('./README.md', markdown, (err) => {
				if (err) {
					console.error(err)
				}
				console.log('file Written Successfully')
			})
		})
}

// Function call to initialize app
init()
