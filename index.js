const mysql = require('mysql2');
const inquirer = require("inquirer")
const console_table = require("console.table");

const Stranger = require("./db/index.js");
const connection = require("./db/connections");
const { allowedNodeEnvironmentFlags } = require('process');
const { doesNotMatch } = require('assert');

let strangerThings



async function init() {
    let newConnection = await connection()
    strangerThings = new Stranger(newConnection)
    loadQ()
}

async function loadQ() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ["View all employees", "Add employee", "Update employee role",
                    "View all roles", "Add role", "View all departments", "Add department", "quit"],
            },
        ]).then(async (data) => {
            switch (data.action) {
                case "View all employees":
                    await strangerThings.viewEmploy()
                    loadQ()
                    break
                case "Add employee":
                    addEmployee()
                    break
                case "Update employee role":
                    updateEmpRole()
                    break
                case "View all roles":
                   await strangerThings.viewRoles()
                    loadQ()
                    break
                case "Add role":
                    addRole()
                    break
                case "View all departments":
                   await strangerThings.viewDept()
                    loadQ()
                    break
                case "Add department":
                    addDepartment()
                    break
                case "quit":
                    let myConnection = await connection()
                    myConnection.end()
            }
        })

}



async function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstname",
                message: "What is the first name?"
            },
            {
                type: "input",
                name: "lastname",
                message: "What is the last name?"
            },
            {
                type: "input",
                name: "roleid",
                message: "What is the role id?" //list
            },
            {
                type: "input",
                name: "manageridid", //list
                massage: "What is the manager id?"
            },
        ]).then((data) => {
            await strangerThings.addEmplpy(data.firstname, data.lastname, data.roleid, data.managerid)
            console.log("new employee created ")

            loadQ()
        })
}

async function updateEmpRole() {
    const roletChoice = await strangerThings.getRoles()
    const employChoice = await strangerThings.getEmployees()
    inquirer
        .prompt([
            {
                type: "list",
                name: "whichEmployee", //list
                message: "Which eployees role do you want to update?"
            },
            {
                type: "input",
                name: "updateRole", //list
                massage: "What is the employees new role?"
            },
        ]).then((data) => {
            strangerThings.updateRole(date.whichEmployee, data.updateRole)
            console.log("role updated")

            loadQ()
        })
}

async function addRole() {
    const departmentChoice = await strangerThings.getDepartments()
    console.log(departmentChoice)
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the  name of the role?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for the role?"
            },
            {
                type: "list",
                name: "department_id",
                message: "What is the department for the role?",
                choices: departmentChoice
            },
        ]).then(async (data) => {
           await strangerThings.addRole(data.title, data.salary, data.department_id)
            console.log("new role created ")

            loadQ()
        })

}

async function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "department_name",
                message: "What is the  name of the department?"
            },
        ]).then((data) => {
            await strangerThings.addDept(data.department_name)
            console.log("new role created ")

            loadQ()
        })
}

init()



// what would you like to do?
    // View all employees
    //add employee
    //update employee role
    //view all roles
    //add role
    //view all dept
    // add dept

//add employee
    //what is first name,
    //what is last name
    //what is  role id
    //what is  manager id
    //what would you like to do

 //update role
    //what is the employee id
    //what is the new roll
        //Deungeon_Master
        //Wizard
        //Paladin
        //chief of police
        //police officer
        //sectretary
        //ruler
        //intern_upsidedown
        //minion
        //editor
        //photographer
        //intern_journalism
    //what would you like to do

//add role
        //whats is the title
        //what is the salary
        //what is the department_id
    //what would you like to do

//add department
    //what is the department name?









