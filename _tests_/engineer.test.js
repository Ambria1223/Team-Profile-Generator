const Engineer = require("../lib/engineer");

describe ("Engineer", () => {
    const mockEngineer = {
        Name: "Jonathan",
        Id:167,
        Email:"jonathanbento1@gmail.com",
        Github:"Jonathan1geek",
    };
    describe("constructor tests", () => {
        test("should contruct a new instance of an engineer class", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toBeInstanceOf(Engineer);
        });
    test("should construct a new instance of an engineer class with name,id,email,and Github",() => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer).toEqual({
            Name:"Jonathan",
            Id: 167,
            Email: "jonathanbento1@gmail.com",
            Github:"Jonathan1geek",
        });
    });
    });

    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getId()).toEqual(167);
        });

    test("should return name when the getName method is called", () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getName()).toEqual("Jonathan");
    });

    test("should return name when the getEmail method is called", () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getEmail()).toEqual("jonathanbento1@gmail.com");
    });

    test("should return name when the getgitHub method is called", () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getgitHub()).toEqual("Jonathan1geek");
    });

    test ("should return name when the getRole method is called", () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getRole()).toEqual("Engineer");
    });

    });
});