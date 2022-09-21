We have two classes, a transaction class and an account class. A transaction cannot be created without belonging to a parent account.

Each instance of the transaction class has an attribute for the day of the transaction, the amount deposited, the amount withdrawn

Each instance of the account class is a ledger with an attribute tracking the overall balance, and storing all the transactions

Tests

Transaction class

1. A transaction can be created and a deposit amount checked
2. One undefined argument (deposit or withdrawal amount) is fine
3. Two undefined arguments throws helpful error message

Account class

1. initially, there should be an account, with balance 0
2. after an deposit of 100, there should be 100 in the account
3. after a subsequent withdrawal of 50, there should be 50 in the account
4. i can print a statement and it shows the dates of transactions, the money moving and balances
5. i can withdraw 50 and it should show a balance of 50
6. after 2 transactions i can print a statement showing both transactions and balances
7. k

Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
