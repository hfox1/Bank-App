class Transaction {
	constructor(deposit, withdrawal) {
		this.deposit = deposit;
		this.withdrawal = withdrawal;
		if ((deposit === withdrawal) === undefined) {
			throw "deposit and withdrawal cannot both be empty...";
		} else {
			const date1 = new Date().toLocaleDateString();
			this.date = date1;
		}
	}
}

module.exports = Transaction;
