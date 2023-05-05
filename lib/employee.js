class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
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

getRole() {
    console.log(`Employee: ${this.role}`)
} };

module.exports = Employee;