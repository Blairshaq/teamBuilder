const inquirer = require('inquirer')
const Intern = require('../../lib/intern')

const createInternee = () => {
    console.log(`
    ==============
    Add Intern to Team
    ==============
    `);

    return inquirer
    .prompt([
        {
            type:"input",
            name: "internName",
            message: "Intern Name"
        },
        
        {
            type:"input",
            name: "internID",
            message: "The Interns Employee ID Number"
        },
        {
            type:"input",
            name: "internEmail",
            message:"Interns Email Address"
        },
        {
            type:"input",
            name: "internSchool",
            message: "The name of the school the intern is from"
        },
    ]).then((answers) => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        return intern   
    });
}

module.exports = createInternee