
/* 

Manager type Employee wich inherits from Employee class. 
All the properties of Employee are accessable to this class.
*/
const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber) {
        super(name, id, email) //passing parameters to super (Employee) class so achieved Object Orientation
        this.OfficeNumber = OfficeNumber //local private variable
    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.OfficeNumber
    }



}

module.exports = Manager