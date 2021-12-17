/* JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank is an object, which contains an array of accounts. 
The bank needs a method that will return the total sum of money in the accounts. 
It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. 
There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() 
values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: 
add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. */
/* 
const bank = {
    accounts: [
        {accNumber: 1, accFullName: "John Wick", accAmount: 500},
        {accNumber: 2, accFullName: "Hans Landa", accAmount: 723.25},
        {accNumber: 3, accFullName: "Tommy Shelby", accAmount: 600},
        {accNumber: 4, accFullName: "Luke The Instructor", accAmount: 4054.2},
    ],
    //Total money fromm all records
    totalMoney: function(){
        total = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            total += this.accounts[i].accAmount;
        }
        return `Total $AUD Amount: ${total} `;
    },
    //Adding account to the bank with a min amount
    addAccount: function(costumerName, depositAmount){
        //Unique ID for acc accounts (auto)
        if(depositAmount > 0 ){
            const autoIncrement = this.accounts[this.accounts.length - 1].accNumber + 1;
            this.accounts.push({
            accNumber: autoIncrement,
            accFullName: costumerName,
            accAmount:  depositAmount,
            });
            return `Welcome ${costumerName}`;
        }
        return `Deposit must be > 0$`;
        
    },
    //Deleting account from bank
    deleteAcc: function(accNumber){
        const index = this.findAcc(accNumber);
        if (index){
            delete this.accounts[index];
            return "Acc has been deleted!"
        }            
        return "User doesn't exist!"
    },

    //Despoit money to specific account
    depositMoney: function(accNumber, depositAmount){
        const index = this.findAcc(accNumber);
        if(index >= 0   ){
            const currentAmount = this.accounts[index].accAmount;
            this.accounts[index].accAmount = currentAmount + depositAmount;
            return `Previous Amount: ${currentAmount}, New Total: ${currentAmount + depositAmount}`;
        }
        return "Wrong acc!"
    },
    //Withdraw Money from bank account
    withdrawMoney: function(accNumber, withdrawAmount){
        const index = this.findAcc(accNumber);
        if(index >= 0){
            const currentAmount = this.accounts[index].accAmount;
            if ((currentAmount - withdrawAmount < 0)){
                return `Your balance can't be less than 0` ;
            }else{
                this.accounts[index].accAmount = currentAmount - withdrawAmount;
                return `Withdraw completed. Previous Amount: ${currentAmount}, New Total: ${currentAmount - withdrawAmount}`;
            }
        }
        return "Wrong acc!"
    },

    //Transfer money between 2 accounts
    transferMoney: function(accFrom, accTo, amount){
        if(amount > 0){
            const accFromIndex = this.findAcc(accFrom);
            const accToIndex = this.findAcc(accTo);
            const fromCurrentAmount = this.accounts[accFromIndex].accAmount;
            const toCurrentAmount = this.accounts[accToIndex].accAmount;
            if (accFromIndex >= 0 && accToIndex >= 0){
                if((fromCurrentAmount  - amount) < 0){
                    return `You can't deposit more money than what you have,
                            Current Amount: ${this.accounts[accFromIndex].accAmount},
                            Trying to deposit ${amount}`;
                }else{
                    this.accounts[accFromIndex].accAmount = fromCurrentAmount - amount;
                    this.accounts[accToIndex].accAmount = toCurrentAmount + amount;
                    return `Transfer Completed!`;
                }
            }
            return `There's an error with the accounts!`;            
        }
        return `Deposit amount should be > 0$`;
    },

    findAcc: function(accNumber){
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].accNumber === accNumber){
                return i;
            }            
        }
        return false;
    }

} */

/* Credit Card Validation
You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number */

 const validateCreditCard = function(creditCard){
    const objMessage = {
        valid: true,
        number: creditCard,
        error: '',
    }
    //Removing Dashes
    let noDashCreditCard = creditCard.replace(/-/g,'');
    //Converting to array
    const arrayCreditCard = noDashCreditCard.split('');
    //Map and parsing all strings to numbers
    const arrayCreditCardParse = arrayCreditCard.map(val=>Number(val));
    //Checking if all numbers are equals (true if, false if not)
    const areEquals = arrayCreditCardParse.every((val, i,arrayCreditCardParse) => val === arrayCreditCardParse[0]);
    //Checking total sum of CDC Numbers
    const checkingTotal = arrayCreditCardParse.reduce((a, b) => a + b);
    //Checking Invalid caracters 
    const invalidCaracters = arrayCreditCardParse.includes(NaN);

    if ( checkingTotal < 16){
        objMessage.valid = false;
        objMessage.error = `Credit card invalid: total sum ${checkingTotal}`
    }
    if (arrayCreditCardParse[arrayCreditCardParse.length - 1] % 2 !== 0){
        objMessage.valid = false;
        objMessage.error = `Credit card invalid: last number must be even ${arrayCreditCardParse[arrayCreditCardParse.length - 1]}`;
    }
    if(areEquals){
       objMessage.valid = false;
       objMessage.error = `Credit card invalid: all numbers are the same ${creditCard}`;
    }
    if(invalidCaracters){
        objMessage.valid = false;
        objMessage.error =  `Credit card invalid: you have invalid caracters ${creditCard}`;
    }

    return objMessage;
}

console.log(validateCreditCard("9999-9999-8888-0000")); 

 