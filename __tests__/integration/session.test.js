describe("Authentication", () => {
    it("shold sum two numbers", () => {
        const x = 2;
        const y = 4;
        const sum = x + y;

        expect(sum).toBe(6);
    });
});

/*
const { User } = require("../../src/app/models");

describe("Authentication", () => {

    it("should sum two numbers", async () => {

        const user = await User.create({
            name: "Elvis", 
            email: "elvis@elvis.com", 
            password_hash: "1f2s31f3s12d1f23a3"
        });

        console.log(user);

        expect(user.name).toBe("Elvis");
    });
});
*/