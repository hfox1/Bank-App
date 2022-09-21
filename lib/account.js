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
		const transaction = `${this.ledger[0].date} || ${this.ledger[0].deposit} || ${this.ledger[0].withdrawal} || ${this.ledger[0].balance}`;
		const toPrint = header + transaction;
		onsole.log(toPrint);
	}
}

module.exports = Account;

var acc = new Account();
const tran = new Transaction(100, 0);
acc.add(tran);
console.log(tran);
