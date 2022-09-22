// a transaction can be created with an amount of money and the date it's created
const Transaction = require('../lib/transaction');

describe('Transaction', () => {
	it('a deposit transaction object is created and the amount is checked', () => {
		var dep1 = new Transaction(100, 0);
		dep1.date = '9/21/2022';
		expect(dep1.deposit).toEqual(100);
		expect(dep1.date).toEqual('9/21/2022');
	});

	it('a deposit transaction object stores the date of creation - REWRITE TEST EACH CALENDAR DAY', () => {
		var dep1 = new Transaction(100, 0);
		let today = new Date().toLocaleDateString()
		expect(dep1.date).toEqual(today);
	});


	it('a null or undefined argument throws', () => {
		expect(() => {
			new Transaction(100, undefined);
		}).toThrow('ensure deposit and withdrawal inputs are numbers >= 0');
		expect(() => {
			new Transaction(100, null);
		}).toThrow('ensure deposit and withdrawal inputs are numbers >= 0');
		expect(() => {
			new Transaction(undefined, 100);
		}).toThrow('ensure deposit and withdrawal inputs are numbers >= 0');
		expect(() => {
			new Transaction(null, 100);
		}).toThrow('ensure deposit and withdrawal inputs are numbers >= 0');
		expect(() => {
			new Transaction(null, null);
		}).toThrow('ensure deposit and withdrawal inputs are numbers >= 0');
		expect(() => {
			new Transaction(undefined, undefined);
		}).toThrow('ensure deposit and withdrawal inputs are numbers >= 0');
	});
});
