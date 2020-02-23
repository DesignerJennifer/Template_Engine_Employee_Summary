var inquirer = require("inquirer")
var id = 1
var allEmployees = []
var Manager = require("./lib/manager")
var Engineer = require("./lib/engineer")
var Intern = require("./lib/intern");
var render = require("./lib/htmlrenderer.js");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function askQuestions() {
    inquirer.prompt([{
        type: "list",
        message: "What do you want to do?",
        choices: ["add Manager", "add Engineer", "add Intern", "I would not like to add more team members"],
        name: "addEmployee"
    }]).then(input => {
        switch (input.addEmployee) {
            case "add Manager":
                addManager()
                break
            case "add Engineer":
                addEngineer()
                break
            case "add Intern":
                addIntern()
                break
            case "I would not like to add more team members":
                buildTeam()
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"

        }, {
            type: "input",
            message: "What is your email?",
            name: "email"
        }, {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        }
    ]).then(function (input) {

        var manager = new Manager(input.name, id++, input.email, input.officeNumber)
        allEmployees.push(manager)
        console.log(allEmployees)
        askQuestions()
    })
}
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"

        }, {
            type: "input",
            message: "What is your email?",
            name: "email"
        }, {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitHubUserName"
        }
    ]).then(function (input) {

        var engineer = new Engineer(input.name, id++, input.email, input.gitHubUserName)
        allEmployees.push(engineer)
        console.log(allEmployees)
        askQuestions()
    })

}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"

        }, {
            type: "input",
            message: "What is your email?",
            name: "email"
        }, {
            type: "input",
            message: "What is your school Name?",
            name: "schoolname"
        }
    ]).then(function (input) {

        var intern = new Intern(input.name, id++, input.email, input.schoolname)
        allEmployees.push(intern)
        console.log(allEmployees)
        askQuestions()
    })

}

askQuestions()

// Create the output directory if the output path doesn't exist
function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(allEmployees), "utf-8");
}


