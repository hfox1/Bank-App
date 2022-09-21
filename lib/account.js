class Account {
	constructor() {
		this.balance = 0;
		this.ledger = [];
	}

	add(transaction) {
		this.ledger.push(transaction);
		this.balance += transaction.deposit - transaction.withdrawal;
	}
}

module.exports = Account;
