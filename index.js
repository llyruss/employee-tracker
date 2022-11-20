const mysql = require('mysql2');
const inquirer = require("inquuirer")
const console_table = require("console.table");

const Stranger = require("./db/index.js");
const connection = require("./db/connections");
const { allowedNodeEnvironmentFlags } = require('process');
const { doesNotMatch } = require('assert');

const strangerThings = new Stranger(connection())

async function init(){
    const newConnection = await connection()
    const strangerThings = new Stranger(newConnection)

    
}

function loadQ(){
    inquirer
    .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?', 
          choices: ["View all employees", "Add employee", "Update employee role",
                    "View all roles", "Add role", "View all departments", "Add department", "quit"],
        },
      ]).then((data)=>{
        switch(data.aciton){
            case "View all employees":
                strangerThings.viewEmploy()
                loadQ()
                break
            case "Add employee": 
                addEmployee()
                break
            case "Update employee role":
                updateEmpRole()
                break
            case "View all roles":
                strangerThings.viewRoles()
                loadQ()
                break
            case "Add role":
                addRole()
                break
            case "View all departments":
                strangerThings.viewDept()
                loadQ()
                break
            case "Add department":
                addDepartment()
                break
            case "quit":
               //unlink db
        }
      }) 

}

function addEmployee(){
    inquirer
    .prompt([
        {
           type: "input" ,
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
    ] ).then((data) => {
             strangerThings.addEmplpy(data.firstname, data.lastname, data.roleid, data.managerid)
        console.log("new employee created ")

        loadQ()
    })
}

function updateEmpRole(){
    inquirer
    .prompt([
        {
           type: "list" ,
           name: "whichEmployee", //list
           message: "Which eployees role do you want to update?"
        },
        {
            type: "input",
            name: "updateRole", //list
            massage: "What is the emploees new role?"
        },
    ] ).then((data) => {
        strangerThings.updateRole(date.whichEmployee, data.updateRole)
        console.log("role updated")

        loadQ()
    })
}

function addRole(){
    inquirer
    .prompt([
        {
           type: "input" ,
           name: "title",
           message: "What is the  name of the role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for the role?"
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department for the role?" //list
        },
    ] ).then((data) => {
             strangerThings.addrole(data.title, data.salary, data.department_id)
        console.log("new role created ")

        loadQ()
    })

}




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

   
    






