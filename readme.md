We have two classes, a transaction class and an account class. A transaction cannot be created without belonging to a parent account.

Each instance of the transaction class has an attribute logging the day of the transaction, and the amount of money that the transaction moves.

Each instance of the account class is a ledger with an attribute tracking the overall balance, and storing all the transactions

The date is the key for each transaction - dates are not necessarily unique so transactions do not have unique keys.
Each transaction object contains the amount of money (withdrawals are negative, deposits are positive) moved by the transaction and the resulting balance.
