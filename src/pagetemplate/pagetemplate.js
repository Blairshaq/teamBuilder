
//creating html for each of the roles of the team.
let employeesHtml = []
const createTeamMembersPage = (teamMembers) => {
    console.log('teamMembers');
    console.log(teamMembers)
    //console.log(html)

    const renderEngineer = (Engineer) => {
        return `
        <div class="card" style="width: 16rem;">
        <div class="card-header">
            <i class="fa-solid fa-clipboard-check"></i> ${Engineer.getRole()}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${Engineer.getName()} </li>  
              <li class="list-group-item">ID: ${Engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub:<a href="http://github.com/${Engineer.getGithub()}"target=_blank" rel="noopener noreferrer">${Engineer.getGithub()}</a></li>
            </ul>
    </div>
    </div>
    `;
    };

    const renderIntern = (Intern) => {
        return `
        <div class="card" style="width: 16rem;">
        <div class="card-header">
            <i class="fa-solid fa-graduation-cap"></i> ${Intern.getRole()}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:${Intern.getName()}</li>  
              <li class="list-group-item">ID:${Intern.getId()}</li>
              <li class="list-group-item">Email:<a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
              <li class="list-group-item">Name of School: ${Intern.getSchool()}</li>
            </ul>
    </div>
    </div>
    `;
    };

    const renderManager = (Manager) => {
        return `
    <div class="card" style="width: 16rem;">
    <div class="card-header">
        <i class="fa-solid fa-people-roof"></i> ${Manager.getRole()}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${Manager.getName()}</li>  
          <li class="list-group-item">ID: ${Manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
        </ul>
</div>
</div>
`;
    };


    employeesHtml.push(
        teamMembers.filter((employee) => employee.getRole() === "Manager")
            .map((manager) => renderManager(manager))
            .join('')
    );
    employeesHtml.push(
        teamMembers.filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => renderEngineer(engineer))
            .join('')
    );
    employeesHtml.push(
        teamMembers.filter((employee) => employee.getRole() === "Intern")
            .map((intern) => renderIntern(intern))
            .join('')
    );
    
    return employeesHtml.join('');

}

//create layout of html page
module.exports = (teamMembers) => {
    return`
        <!DOCTYPE html>
         <html>
           <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <script src="https://kit.fontawesome.com/58bfb9f4e3.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <style>
            .jumbotron{
                background-color: #e84756;
                text-align: center;
                color: white;
            }

            .card-header{
                background-color: #0077f7;
                text-align: center;
                color: white;
            }
            </style>

            <title>Team Profile Generator</title>
            </head>
            <body>
                <header>
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1>The Team</h1>
                </div>
                </header>

                <main>
                 <div class="container">
                    <div class ="row">
                    
                                      
                    ${createTeamMembersPage(teamMembers)}
                    </div>
                </div>
            </main>
        </body>
    </html>
    `;
};

