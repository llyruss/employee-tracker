
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

    addDept(newDept){
        const query = `INSERT INTO department (department_name) VALUES(${newDept});`
        await this.connection.execute(query)
        console.log("new department created")
        
    }

    addRole(newRole){
        const query = `INSERT INTO employee_role (title, salary, department_id) VALUES (${newRole});`
        await this.connection.execute(query)
        console.log("new role created")
    }

    addEmplpy(newEmploy){
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(${newEmploy});`
        await this.connection.execute(query)
        console.log("new employee created")
    }

    updateRole(updateRole, employID){
        const query = `UPDATE employee SET role_id = '${updateRole}', WHERE id = ${employID};`
        await this.connection.execute(query)
        console.log("role updated")
    }
}

module.exports=Stranger 