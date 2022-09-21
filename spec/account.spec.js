// initially, there should be an account, with balance 0
// after an deposit of 100, there should be 100 in the account
// i can print a statement and it shows the date of the transactions, money moving and balances
// i can withdraw 50 and it should show a balance of 50

const Account = require("../lib/account");

describe("Account", () => {
	// beforeEach((done) => {
	// });

	it("an account has balance 0 on creation", () => {
		var acc = new Account();
		expect(acc.balance).toBe(0);
	});
});
