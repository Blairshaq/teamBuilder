const inquirer = require('inquirer')
const createManager = require('./src/Controllers/managerController')
const createEngineer = require('./src/Controllers/engineerController')
const createInternee = require('./src/Controllers/internController')
const createTeamPage = require('./src/Controllers/pageCreationController')

let teamMembers = [] //it shall hold all the employees data and used for html page

const getInput = () =>{
    console.log('getInput called')
    return inquirer
    .prompt([
        {
            type:"list",
            name: "addEmployee",
            message:"Select the employee you want to add to the list.",
            choices:[
                "Engineer",
                "Intern",
                
                "End Making Team List"
            ],
        },
    ])
    .then((choice) => {
        if (choice.addEmployee === "Engineer"){
            manageEngineer()
        }else if (choice.addEmployee === "Intern") {
            manageIntern()
        }else if (choice.addEmployee === "End Making Team List"){
            manageTeamBuildingEnd()
            
        }
    });

} 


const manageEngineer = async () => {
    let engineer = await createEngineer()
    teamMembers.push(engineer)

    getInput()
}

const manageIntern = async () => {
    let intern = await createInternee()
    teamMembers.push(intern)

    getInput()
}

const manageTeamBuildingEnd = () => {
    
    createTeamPage(teamMembers)
}

main = async () => {
//at welcome manager shall be created
    let manager = await createManager()
    teamMembers.push(manager)

    getInput()
    
} //end main

main() //spin up the server