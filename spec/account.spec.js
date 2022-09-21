const Account = require("../lib/account");

describe("Account", () => {
	// beforeEach((done) => {
	// });

	it("an account has balance 0 on creation", () => {
		var acc = new Account();
		expect(acc.balance).toBe(0);
	});
});
