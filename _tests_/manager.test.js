
const Manager = require("../lib/manager");

describe ("Manager", () => {
    const mockManager = {
        name: "Cynthia",
        id:835,
        email:"cynthiagreen32@gmail.com",
        officeNumber:62,
    };
    describe("constructor tests", () => {
        test("should contruct a new instance of an intern class", () => {
            const manager = new Manager(mockManager);
            expect(manager).toBeInstanceOf(Manager);
        });
    test("should construct a new instance of an manager class with name,id,email,and office number",() => {
        const manager = new Manager(mockManager);
        expect(manager).toEqual({
            name:"Cynthia",
            id: 835,
            email: "cynthiagreen32@gmail.com",
            officeNumber: 62,
        });
    });
    });

    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getId()).toEqual(835);
        });

    test("should return name when the getName method is called", () => {
        const manager = new Manager(mockManager);
        expect(manager.getName()).toEqual("Cynthia");
    });

    test("should return name when the getEmail method is called", () => {
        const manager = new Manager(mockManager);
        expect(manager.getEmail()).toEqual("cynthiagreen32@gmail.com");
    });

    test("should return name when the getofficeNumber method is called", () => {
        const manager = new Manager(mockManager);
        expect(manager.getofficeNumber()).toEqual(62);
    });

    test ("should return name when the getRole method is called", () => {
        const manager = new Manager(mockManager);
        expect(manager.getRole()).toEqual("Manager");
    });

    });
});

