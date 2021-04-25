// TODO: Include packages needed for this application
const FileSystem = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Prompt the user
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'project',
                message: 'What is the project?'
            },

            {
                type: 'input',
                name: 'Description',
                message: 'Please Enter in a Description'
            },

            {
                type: 'input',
                name: 'Installation',
                message: 'Please Describe How to Install Your Project'
            },

            {
                type: 'input',
                name: 'Usage',
                message: 'Please Describe How to Utilize Your Project and How it Exists in Its Current State.'
            },
            
            {
                type: 'input',
                name: 'Link',
                message: 'Please Path a Link to a GIF/JPG of Your Current State [Using Hierarchical Syntax]'
            },

            {
                type: 'input',
                name: 'Credits',
                message: 'Please List Any/All Contributors to Your Project'
            },

            {
                type: 'checkbox',
                message: 'Choose a License type.',
                name: 'License',
                choices: ['Unlicensed', 'Public Domain', 'Permissive License', 'Restricted License']
            },

            {
                type: 'input',
                name: 'Badges',
                message: 'Please Describe How to Utilize Your Project'
            },

            {
                type: 'input',
                name: 'Features',
                message: 'Please Describe Major Features of Project'
            },

            {
                type: 'input',
                name: 'Tests',
                message: 'Please Describe How to Run Tests On Your Project'
            },

            {
                type: 'input',
                name: 'TestLink',
                message: 'Please Path a link to a GIF/JPG of testing [Using Hierarchical Syntax]' 
            },
        ]) 
        .then(function (data) {
            console.log(data.project);
            const filename =
                data.project
                    .toLowerCase()
                    .split(' ')
                    .join('') + '.md';

            FileSystem.writeFile(filename, generateMarkdown(data), function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log('The File Has Been Written.');
            });
        });
}

function init() {
    writeToFile();
}

init();
