const inquirer = require('inquirer')
const Engineer = require('../../lib/engineer')

const createEngineer = () => {
    console.log(`
    =======================
    Add Engineer!
    =======================
    `);
    return inquirer
    .prompt([
        {
            type:"input",
            name: "engineerName",
            message: "Engineer Name"
        },
        
        {
            type:"input",
            name: "engineerID",
            message: "The Engineer Employee ID Number"
        },
        {
            type:"input",
            name: "engineerEmail",
            message: "The Engineer Email Address"
        },
        {
            type:"input",
            name: "engineerGitHub",
            message: "The Engineer GitHub"
        },
    ]).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)

        return engineer
        
    });
}

module.exports = createEngineer