const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) 
    super (name,email,id) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = "Manager";
        
    }


    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    

getofficeNumber() {
    return this.officeNumber;
}

getRole() {
    return this.role;
} };



module.exports = Manager;