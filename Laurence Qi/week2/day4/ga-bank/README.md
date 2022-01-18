# Title: GA ATM App

### Summary
- This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
- You'll be selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

### Objectives:
- DOM selection, appending, removal, updating
- code organisation: separation of concerns, i.e. _display logic_ vs. _business logic_

### Specification:

* Keep track of the checking and savings balances somewhere
* Add functionality so that a user can deposit money into one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Add functionality so that a user can withdraw money from one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.
* When the balance of the bank account is $0 the background of that bank account
should be red. It should be gray when there is money in the account.
* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
* Make sure there is overdraft protection going both ways.
* Are there ways to refactor your code to make it DRYer?

___

#### Separation of Concerns

Spend some time thinking about the following before you even start writing code: can you separate 

- the GUI code (event handlers for form input or buttons) 

from 

- the banking code (deposit and withdrawal between accounts, checking for overdraft etc) 

as much as possible? 

Ideally you would be able to test all the banking functions from the console, and then connect them to the GUI code with the minimum amount of overlap or points of contact. 

_These two parts of the system (display logic and business logic) should know as little as possible about each other._