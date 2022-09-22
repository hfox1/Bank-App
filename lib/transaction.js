class Transaction {
	constructor(deposit, withdrawal) {
		this.deposit = deposit;
		this.withdrawal = withdrawal;
		if (
			(deposit === null || withdrawal === null) || 
			(deposit === undefined || withdrawal === undefined) || 
			(deposit < 0 || withdrawal < 0)
			 ) {
						throw 'ensure deposit and withdrawal inputs are numbers >= 0';
					} 
		else {
			this.date = new Date().toLocaleDateString();
				 }
	}
}

module.exports = Transaction;
