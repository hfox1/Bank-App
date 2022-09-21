class Transaction {
	constructor(deposit, withdrawal) {
		this.deposit = deposit;
		this.withdrawal = withdrawal;
		if (deposit === withdrawal && deposit === undefined) {
			throw "deposit and withdrawal cannot both be empty...";
		} else {
			const date1 = new Date().toLocaleDateString();
			this.date = date1;
		}
	}
}

module.exports = Transaction;

let arr = [];
var dep1 = new Transaction(1, 2);
console.log(dep1);
arr.push(dep1);
console.log(arr);
