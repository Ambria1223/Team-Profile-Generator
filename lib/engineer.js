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
     };
    


getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getGithub() {
    return this.Github;
}

getRole() {
    return this.role;
} } ;

module.exports = Engineer;