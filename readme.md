We have two classes, a transaction class and an account class. A transaction cannot be created without belonging to a parent account.

Each instance of the transaction class has an attribute for the day of the transaction, the amount deposited, the amount withdrawn

Each instance of the account class is a ledger with an attribute tracking the overall balance, and storing all the transactions

// initially, there should be an account, with balance 0
// after an deposit of 100, there should be 100 in the account
// i can print a statement and it shows the date of the transactions, money moving and balances
// i can withdraw 50 and it should show a balance of 50
