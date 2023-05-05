const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, school) 
    super ({name,email,id}){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern";
        
    }


getName() {
    console.log(`name: ${this.name}`);
}

getID() {
    console.log(`id: ${this.id}`);
}

getEmail() {
    console.log(`email: ${this.email}`);
}

getSchool() {
    console.log(`school: ${this.school}`);
}

getRole() {
    console.log(`role: ${this.role}`)
} };

module.exports = Intern;