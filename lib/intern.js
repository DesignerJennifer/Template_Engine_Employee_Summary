var Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        // school
        // getSchool()
        // getRole() // Overridden to return 'Intern'
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern