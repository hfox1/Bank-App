const Transaction = require('./transaction');

class Account {
	constructor() {
		this.balance = 0;
		this.ledger = [];
	}

	add(transaction) {
		this.ledger.push(transaction);
		this.balance += transaction.deposit - transaction.withdrawal;
		transaction.balance = this.balance;
	}

	print() {
		const header = 'date || credit || debit || balance';
		var transactions = '';

		var i = this.ledger.length;
		while (i--) {
			const printedDeposit =
				this.ledger[i].deposit === 0 ? ' ' : ` ${this.ledger[i].deposit.toFixed(2)} `; 
			const printedWithdrawal = this.ledger[i].withdrawal === 0 ? ' ' : ` ${this.ledger[i].withdrawal.toFixed(2)} `;
			transactions = transactions.concat(`\n`,
				`${this.ledger[i].date} ||${printedDeposit}||${printedWithdrawal}|| ${this.ledger[i].balance.toFixed(2)}`
			);
		}
		const toPrint = `${header}${transactions}`;
		console.log(toPrint);
	}
}

module.exports = Account;

