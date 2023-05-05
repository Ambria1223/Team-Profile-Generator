const Employee = require("./employee");

class Engineer extends Employee { 
    constructor(name, id, email, gitHub)
    super (name,email,id)
     {  
        this.name = name;
        this.id = id;
        this.email = email;
        this.Github = Github;
        this.role = "Engineer";
        
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

getGithub() {
    console.log(`gitHub: ${this.gitHub}`)
}

getRole() {
    console.log(`Engineer: ${this.role}`)
} } ;

module.exports = Engineer;