const Transaction = require("./transaction");

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
		const header = "date || credit || debit || balance";
		const printedDeposit =
			this.ledger[0].deposit === 0
				? " "
				: ` ${this.ledger[0].deposit.toFixed(2)} `;
		const printedWithdrawal =
			this.ledger[0].withdrawal === 0
				? " "
				: ` ${this.ledger[0].withdrawal.toFixed(2)} `;
		const transaction = `${
			this.ledger[0].date
		} ||${printedDeposit}||${printedWithdrawal}|| ${this.ledger[0].balance.toFixed(
			2
		)}`;
		const toPrint = `${header}\n${transaction}`;
		return console.log(toPrint);
	}
}

module.exports = Account;

// var acc = new Account();
// const tran = new Transaction(100, 0);
// acc.add(tran);
// console.log(tran);
