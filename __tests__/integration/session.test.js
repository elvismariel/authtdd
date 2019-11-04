/*
describe("Authentication", () => {
    it("shold sum two numbers", () => {
        const x = 2;
        const y = 4;
        const sum = x + y;

        expect(sum).toBe(6);
    });
});
*/
/*
const { User } = require("../../src/app/models");

describe("Authentication", () => {

    it("should sum two numbers", async () => {

        const user = await User.create({
            name: "Elvis", 
            email: "elvis@elvis.com", 
            password_hash: "1f2s31f3s12d1f23a3"
        });

        expect(user.name).toBe("Elvis");
    });
});
*/

const request = require("supertest");
const app = require("../../src/app");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("Authentication", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("should authenticate with valid credential", async () => {
        const user = await User.create({
            name: "Elvis", 
            email: "elvis@elvis.com", 
            password: "1f2s31f3s12d1f23a3"
        });

        const response = await request(app)
        .post("/sessions")
        .send({
            email: user.email,
            password: "123456"
        });

        expect(response.status).toBe(200);
    })
});