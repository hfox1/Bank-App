class Account {
	constructor() {
		this.balance = 0;
		this.ledger = [];
	}

	add(transaction) {
		this.ledger.push(transaction);
	}
}

module.exports = Account;
