//import from Employee
const Employee = require("./Employee");

//create class
class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, id, email, 'Intern');
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;