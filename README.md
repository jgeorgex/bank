# Bank

A simple banking program built with Java Script.

## Requirements

You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command-line interface that takes input from STDIN.) Deposits, withdrawal.

Account statement (date, amount, balance) printing.

Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012.
And a deposit of 2000 on 13-01-2012.
And the withdrawal of 500 on 14-01-2012.
When she prints her bank statement.
Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00

## User Stories

As a client. <br>
So that I can put money in to my account. <br>
I can make a deposit which stores deposit amount and time of deposit. <br>

As a client. <br>
So I can take money out of my account. <br>
I can make a withdrawal which stores withdrawal amount and time of withdrawal. <br>

As a client. <br>
So I can see a dated record of my deposit's, withdrawals and balance. <br>
I can print a statement. <br>
