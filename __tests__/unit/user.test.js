const { bcrypt } = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
    beforeEach(async () => {
        await truncate();
    })

    it("should encrypt user password", async () => {
        const user = await User.create({
            name: "Elvis",
            email: "elvis@elvis.com",
            password: "123456"
        });

        const hash = await bcrypt.compare("123456", user.password_hash);
        
        expect(hash).toBe(true);
    })
});