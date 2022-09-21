// Tests
// 1. initially, there should be an account, with balance 0
// 2. after an deposit of 100, there should be 100 in the account
// 3. after a subsequent withdrawal of 50, there should be 50 in the account
// 4. i can print a statement and it shows the dates of transactions, the money moving and balances
// 5. i can withdraw 50 and it should show a balance of 50
// 6. after 2 transactions i can print a statement showing both transactions and balances
// 7.

const Account = require("../lib/account");
const Transaction = require("../lib/transaction");

describe("Account", () => {
	// beforeEach((done) => {
	// });

	it("an account has balance 0 on creation", () => {
		var acc = new Account();
		expect(acc.balance).toBe(0);
	});

	describe("account works with mocked transactions", () => {
		it("mocked transaction can be added to an account", () => {
			var acc = new Account();
			var dep1 = { deposit: 2, withdrawal: 1, date: "9/21/2022" };
			acc.add(dep1);
			expect(acc.ledger).toEqual([
				{ deposit: 2, withdrawal: 1, date: "9/21/2022", balance: 1 },
			]);
		});

		it("mocked transaction affects account balance", () => {
			var acc = new Account();
			var dep1 = { deposit: 100, withdrawal: 0, date: "9/21/2022" };
			acc.add(dep1);
			expect(acc.balance).toBe(100);
		});

		it("2 transactions affect account balance", () => {
			var acc = new Account();
			var dep1 = { deposit: 100, withdrawal: 0, date: "9/21/2022" };
			acc.add(dep1);
			var dep2 = { deposit: 0, withdrawal: 50, date: "9/21/2022" };
			acc.add(dep2);
			expect(acc.balance).toBe(50);
		});

		it("prints one mocked transaction", () => {
			var acc = new Account();
			acc.balance = 3000.0;
			var dep1 = { deposit: 0, withdrawal: 500, date: "14/01/2023" };
			acc.add(dep1);

			const logSpy = jest.spyOn(console, "log");
			acc.print();
			expect(logSpy).toHaveBeenCalledWith(
				"date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00"
			);
		});
	});
});
