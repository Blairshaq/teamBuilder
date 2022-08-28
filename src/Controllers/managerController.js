const inquirer = require('inquirer')
const Manager = require('../../lib/manager')


const createTeamManager = () => {
    console.log(`
    ================
    Welcome To Team Management System
    ================

    ================
    Please Create Team Manager
    ================
    `)
    return inquirer
    .prompt([
        {
            type:"input",
            name: "managerName",
            message: "Manager Name"
        },
        
        {
            type:"input",
            name: "managerID",
            message: "Manager Employee ID Number"
        },
        {
            type:"input",
            name: "managerEmail",
            message: "Manager Email Address"
        },
        {
            type:"input",
            name: "managerOfficeNumber",
            message: "Manager Office Number"
        },
    ]).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);

        return manager
        /* newTeam.push(manager);
        console.log(newTeam);
        addNewTeamMember(); */
        
    });
}

module.exports = createTeamManager