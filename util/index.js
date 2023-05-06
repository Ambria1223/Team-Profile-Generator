const inquirer = require("inquirer");

const fs = require("fs")

const generateHTML = require("./generateHTML");

const Manager = require("./lib/manager.js");

const Engineer = require("./lib/engineer.js");

const Intern = require("./lib/intern.js");

const employee = [];

const validateInput = (userInput) => {
    if(userInput === "") {
        return "please type your answer before proceeding";
    }
    else {
        return true;
    }
};

const init = async () => {
    await createManager();

    while (isTeamComplete) {

        const employeeTypeQuestion = [
            {
                type: "list",
                message: "Please select the employee type you wish to add:",
                name: "employeeType",
                choices: [
                    {name: "Engineer", value:"engineer", short:"Engineer"},
                    {name:"Intern", value:"none",short:"None"},
                    {name:"None", value:"none",short:"None"},

                ],
            },
        ];

        const {employeeType} = await inquirer.createPromptModule(employeeTypeQuestion);

        if (employeeType === "none") {
            isTeamComplete = true; 
        } else {
            if (employeeType === "engineer") {
                await createEngineer();
            }

            if (employeeType === "intern") {
                await createIntern();
            }
        }
        
        }

        const HTML = generateHTML(employees);
        fs.writeFileSync("team-profile.html",HTML,(err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("HTML file created");
            }
        });
    };

    const createManager = async () => {
        const managerQuestions = [
            {
                type: "input",
                message: "Enter manager name:",
                name: "name",
                validate: validateInput,
            },
            {
                type:"input",
                message:"Enter employee ID:",
                name:"id",
                validate: validateInput,
            },
            {
                type: "input",
                message: "Enter your office number:",
                name:"officeNumber",
                validate: validateInput,
            }
        ];

    const managerAnswers = await inquirer.createPromptModule(managerQuestions);

    const manager = new Manager(managerAnswers);

    employees.push(manager);
};

const createEngineer = async () => {
    const engineerQuestions = [
        {
            type: "input",
            message: "Please enter engineer name:",
            name:"name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Please enter engineer ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type:"input",
            message:"Please enter engineer email",
            name:"email",
            validate: validateInput,
        },
        {
            type:"input",
            message:"Please enter engineer github profile:",
            name:"github",
            validate: validateInput,
        },
        
    ];

    const engineerAnswers = await inquirer.createPromptModule(engineerQuestions);

    const engineer = new Engineer(engineerAnswers);

    employee.push(engineer);
};

const createIntern = async () => {
    const internQuestions = [
        {
            type: "input",
            message: "Enter intern name:",
            name: "name",
            validate: validateInput,
        },
        {
            type:"input",
            message:"Enter intern ID:",
            name:"id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern ID:",
            name:"id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern email:",
            name:"email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern school name:",
            name:"school",
            validate: validateInput,
        }
    ];

const internAnswers = await inquirer.createPromptModule(internQuestions);

const intern = new Intern(internAnswers);

employees.push(intern);
};

init();
