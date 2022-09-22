const Account = require('../lib/account');
const Transaction = require('../lib/transaction');

describe('Account', () => {
	it('an account has balance 0 on creation', () => {
		var acc = new Account();
		expect(acc.balance).toBe(0);
	});

	describe('account works with mocked transactions', () => {
		it('mocked transaction can be added to an account', () => {
			var acc = new Account();
			var dep1 = { deposit: 2, withdrawal: 1, date: '9/21/2022' };
			acc.add(dep1);
			expect(acc.ledger).toEqual([
				{ deposit: 2, withdrawal: 1, date: '9/21/2022', balance: 1 },
			]);
		});

		it('mocked transaction affects account balance', () => {
			var acc = new Account();
			var dep1 = { deposit: 100, withdrawal: 0, date: '9/21/2022' };
			acc.add(dep1);
			expect(acc.balance).toBe(100);
		});

		it('2 transactions affect account balance', () => {
			var acc = new Account();
			var dep1 = { deposit: 100, withdrawal: 0, date: '9/21/2022' };
			acc.add(dep1);
			var dep2 = { deposit: 0, withdrawal: 50, date: '9/21/2022' };
			acc.add(dep2);
			expect(acc.balance).toBe(50);
		});

		it('prints one mocked transaction', () => {
			var acc = new Account();
			acc.balance = 3000.0;
			var dep1 = { deposit: 0, withdrawal: 500, date: '14/01/2023' };
			acc.add(dep1);

			const logSpy = jest.spyOn(console, 'log');
			acc.print();
			expect(logSpy).toHaveBeenCalledWith(
				'date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00'
			);
		});

		it('prints three mocked transactions', () => {
			var acc = new Account();
			var dep1 = { deposit: 1000, withdrawal: 0, date: '10/01/2023' };
			var dep2 = { deposit: 2000, withdrawal: 0, date: '13/01/2023' };
			var dep3 = { deposit: 0, withdrawal: 500, date: '14/01/2023' };
			acc.add(dep1);
			acc.add(dep2);
			acc.add(dep3);

			const logSpy = jest.spyOn(console, 'log');
			acc.print();
			expect(logSpy).toHaveBeenCalledWith(
				'date || credit || debit || balance\n' +
        '14/01/2023 || || 500.00 || 2500.00\n' +
        '13/01/2023 || 2000.00 || || 3000.00\n' +
        '10/01/2023 || 1000.00 || || 1000.00'
			);
		});
	});
});
