/* 
Parent Class to hold all common properties of employees e.g. manager, engineer, intern
 */
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getRole() {
        return "Employee", "Manager", "Intern", "Engineer"
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }


}

module.exports = Employee