const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) 
    super ({name,email,id}) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = "Manager";
        
    }


getName() {
    console.log(`name: ${this.name}`);
}

getId() {
    console.log(`id: ${this.id}`);
}

getEmail() {
    console.log(`email: ${this.email}`);
}

getofficeNumber() {
    console.log(`officeNumber: ${this.officeNumber}`)
}

getRole() {
    console.log(`Manager: ${this.role}`)
} };



module.exports = Manager;