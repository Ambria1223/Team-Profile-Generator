const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, school) 
    super (name,email,id){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern";
        
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
    

getSchool() {
   return this.school;
}

getRole() {
    return this.role;
} };

module.exports = Intern;