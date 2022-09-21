class Transaction {
	constructor(deposit, withdrawal) {
		this.deposit = deposit;
		this.withdrawal = withdrawal;
		const date1 = new Date().toLocaleDateString();
		this.date = date1;
	}
}

module.exports = Transaction;
