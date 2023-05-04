const { default: test } = require('tests/employee.test.js');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

getName(); {
    console.log(`name: ${this.name}`);
}

getId(); {
    console.log(`id: ${this.id}`);
}

getEmail(); {
    console.log(`email: ${this.email}`);
}

getRole(); {
    console.log(`Employee: ${this.Employee}`)
}

test('Employee class methods return expected values', () => {
    const employee = new Employee('John Smith', '1234', 'john.smith@example.com');
    expect(employee.getName()).toBe('John Smith');
    expect(employee.getId()).toBe('1234');
    expect(employee.getEmail()).toBe('john.smith@example.com');
    expect(employee.getRole()).toBe('Employee');
  });
  