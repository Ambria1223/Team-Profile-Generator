const Employee = require("./lib/employee");

describe ("Employee", () => {
    const mockEmployee = {
        Name: "Bob",
        Id:123,
        Email:"bobisawesome@gmail.com",
    };
    describe("constructor tests", () => {
        test("should contruct a new instance of an employee class", () => {
            const employee = new Employee(mockEmployee);
            expect(employee).toBeInstanceOf(Employee);
        });
    test("should construct a new instance of an employee class with name,id,email",() => {
        const employee = new Employee(mockEmployee);
        expect(employee).toEqual({
            Name:"Bob",
            Id: 123,
            Email: "bobisawesome@gmail.com",
        });
    });
    });

    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getId()).toEqual(123);
        });

    test("should return name when the getName method is called", () => {
        const employee = new Employee(mockEmployee);
        expect(employee.getName()).toEqual("Bob");
    });

    test("should return name when the getEmail method is called", () => {
        const employee = new Employee(mockEmployee);
        expect(employee.getEmail()).toEqual("bobisawesome@gmail.com");
    });
    });
});