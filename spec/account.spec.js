// Tests
// 1. initially, there should be an account, with balance 0
// 2. after an deposit of 100, there should be 100 in the account
// 3. after one transaction i can print a statement and it shows the date of the transaction, the money moving and balance
// 4. i can withdraw 50 and it should show a balance of 50
// 5. after 2 transactions i can print a statement showing both transactions and balances
// 6.

const Account = require("../lib/account");
const Transaction = require("../lib/transaction");

describe("Account", () => {
	// beforeEach((done) => {
	// });

	it("an account has balance 0 on creation", () => {
		var acc = new Account();
		expect(acc.balance).toBe(0);
	});

	describe("working with transactions", () => {
		it("a transaction can be added to an account", () => {
			var acc = new Account();
			var dep1 = { deposit: 1, withdrawal: 2, date: "9/21/2022" };
			acc.add(dep1);
			expect(acc.ledger).toBe([
				{ deposit: 1, withdrawal: 2, date: "9/21/2022" },
			]);
		});
	});
});
