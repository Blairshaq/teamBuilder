
const fs = require("fs");
const createTeamMembersPage = require('../../src/pagetemplate/pagetemplate')

const finalizeTeamBuilding = (fileName, data) => {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;

        } else {
            console.log("Index.html is created successfully in dist folder!");
        }


    });
}

const createTeamPage = (teamMembers) => {

    return finalizeTeamBuilding('./dist/index.html', createTeamMembersPage(teamMembers))
}

module.exports = createTeamPage