const Intern = require("./lib/intern");

describe ("Intern", () => {
    const mockIntern = {
        Name: "Amanda",
        Id:142,
        Email:"amandaisawesome@gmail.com",
        School:"Howard",
    };
    describe("constructor tests", () => {
        test("should contruct a new instance of an intern class", () => {
            const intern = new Intern(mockIntern);
            expect(intern).toBeInstanceOf(Intern);
        });
    test("should construct a new instance of an intern class with name,id,email,and school",() => {
        const intern = new Intern(mockIntern);
        expect(intern).toEqual({
            Name:"Amanda",
            Id: 142,
            Email: "amandaisawesome@gmail.com",
            School: "Howard",
        });
    });
    });

    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getId()).toEqual(142);
        });

    test("should return name when the getName method is called", () => {
        const intern = new Intern(mockIntern);
        expect(intern.getName()).toEqual("Amanda");
    });

    test("should return name when the getEmail method is called", () => {
        const intern = new Intern(mockIntern);
        expect(intern.getEmail()).toEqual("amandaisawesome@gmail.com");
    });

    test("should return name when the getSchool method is called", () => {
        const intern = new Intern(mockIntern);
        expect(intern.getSchool()).toEqual("Howard");
    });

    test ("should return name when the getRole method is called", () => {
        const intern = new Intern(mockIntern);
        expect(intern.getRole()).toEqual("Intern");
    });

    });
});
