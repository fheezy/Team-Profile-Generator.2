const Employee = require("./Employee");

//Create Engineer class
class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super(name, id, email, 'Engineer');
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
