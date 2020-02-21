var inquirer = require("inquirer")
var id = 1
var allEmployees = []
var Manager = require("./lib/manager")
var Engineer = require("./lib/engineer")
var Intern = require("./lib/intern")


function askQuestions() {
    inquirer.prompt([{
        type: "list",
        message: "What do you want to do?",
        choices: ["add Manager", "add Engineer", "add Intern"],
        name: "addEmployee"
    }]).then(function (input) {
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

}

function addIntern() {

}

askQuestions()
