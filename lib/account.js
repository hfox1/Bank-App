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

		const format = (toFormat, methodName, index) => {
			toFormat[index].methodName === 0 ? ' ' :
						 ` ${toFormat[index].methodName.toFixed(2)} `;
		}

		var i = this.ledger.length;
		while (i--) {
			const printedDeposit = format(this.ledger, 'deposit', i);
			// this.ledger[i].deposit === 0 ? ' ' :
			// 	 ` ${this.ledger[i].deposit.toFixed(2)} `; 
			const printedWithdrawal = format(this.ledger, 'withdrawal', i);
			// this.ledger[i].withdrawal === 0 ? ' ' :
			//  ` ${this.ledger[i].withdrawal.toFixed(2)} `;
			transactions = transactions.concat(`\n`,
				`${this.ledger[i].date} ||${printedDeposit}||${printedWithdrawal}|| ${this.ledger[i].balance.toFixed(2)}`
			);
		}
		console.log(`${header}${transactions}`);
	}
}





module.exports = Account;

