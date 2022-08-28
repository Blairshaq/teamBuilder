/* 

Engineer type Employee wich inherits from Employee class. 
All the properties of Employee are accessable to this class.
*/
const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email) //passing parameters to super (Employee) class so achieved Object Orientation
        this.github = github //local private variable
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }


}

module.exports = Engineer