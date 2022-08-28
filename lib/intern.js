/* 

Intern type Employee wich inherits from Employee class. 
All the properties of Employee are accessable to this class.
*/
const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)//passing parameters to super (Employee) class so achieved Object Orientation
        this.school = school //local private variable
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }



}

module.exports = Intern