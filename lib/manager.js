var Employee = require("./employee")

class Manager extends Employee {
 constructor(name, id, email, officeNumber) {
        super(name, id, email)
       
        this.officeNumber = officeNumber
    // officeNumber
    // getRole() // Overridden to return 'Manager'
 }
 getOfficeNumber() {
     return this.officeNumber
 }
 getRole() {
     return "Manager"
 }
}

module.exports = Manager