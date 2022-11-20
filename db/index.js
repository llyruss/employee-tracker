
class Stranger {

    constructor (connection) {
        this.connection = connection
    }

    async viewDept(){
        const query = "select * from department"
        const [rows, fields] = await this.connection.execute(query)
        console.table(rows)
    }

    async viewRoles(){
        const query = "select * from employee_role"
        const [rows, fields] = await this.connection.execute(query)
        console.table(rows)
       
    }

    async viewEmploy(){
        const query = "select * from employee"
        const [rows, fields] = await this.connection.execute(query)
        console.table(rows)
    }

    async addDept(department_name){
        const query = `INSERT INTO department (department_name) VALUES(${department_name});`
        await this.connection.execute(query)
        console.log("new department created")
        
    }

    async addRole(title, salary, department_id){
        const query = `INSERT INTO employee_role (title, salary, department_id) VALUES (${title}, ${salary}, ${department_id});`
        await this.connection.execute(query)
        console.log("new role created")
    }

    async addEmplpy(first_name, last_name, role_id, manager_id){
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(${first_name}, ${last_name}, ${role_id}, ${manager_id});`
        await this.connection.execute(query)
        console.log("new employee created")
    }

    async updateRole(updateRole, employID){
        const query = `UPDATE employee SET role_id = '${updateRole}', WHERE id = ${employID};`
        await this.connection.execute(query)
        console.log("role updated")
    }
}

module.exports=Stranger 