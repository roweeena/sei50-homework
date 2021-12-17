console.log("JavaScript Bank Loaded");

//TO DO - Need to refactor repeated code.
//BUGS
    //FIXED - Negative integers are accepted
    //Causes error when trying to access a not-yet created account

//define global variables here
let uniqueID = 0;

//declare functions here

// function that checks for negative values
const checkNeg = function(withdraw, accountBalance) {
    if (withdraw <= 0) {
        console.log('Invalid amount. Please enter a postive number.');
        return false;
    } else if (accountBalance - withdraw < 0){
        console.log('Unfortunately, your account balance is too low to complete this withdrawal.');
        return false;
    } else {
        return true;
    }
}

//initialise bank object

const bank = {
    accounts: [],
    //method that will return the total sum of money in all accounts
    totalSumAllAccounts: function () {
        let sum = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            sum = sum + this.accounts[i].balance;
        }
        return sum;
    },
    //method that will add a new account to the array of accounts
    addAccount: function (ownerName, accountBalance) {
        const newAccount = {
            name: ownerName,
            balance: accountBalance,
            ID: uniqueID    //Matches the index in the accounts array
        }
        if (!checkNeg(accountBalance, newAccount.balance)) {
            return 'fail';
        }
        this.accounts.push(newAccount);
        uniqueID++;     //This will ensure that no two accounts will ever have the same ID
        console.log(`Welcome ${newAccount.name} to the Bank.`,
        `Your Unique ID is ${newAccount.ID}. Please store this number safe for future use.`, 
        `Current balance: $${newAccount.balance}. `); 
    },
    //method that allows the user to withdraw money from account
    withdrawFromAccount: function (loginID, withdraw) {
        if (!checkNeg(withdraw, this.accounts[loginID].balance)) {
            return 'fail';
        }
        this.accounts[loginID].balance = this.accounts[loginID].balance - withdraw;
        console.log(`Welcome Back ${this.accounts[loginID].name}.`,
        `You've withdrawn $${withdraw} from your account.`,
        `Current balance: $${this.accounts[loginID].balance}.`);
    },
    //method that allows the user to deposit from account
    depositToAccount: function (loginID, deposit) {
        if (!checkNeg(deposit, this.accounts[loginID].balance)) {
            return 'fail';
        }
        this.accounts[loginID].balance = this.accounts[loginID].balance + deposit;
        console.log(`Welcome Back ${this.accounts[loginID].name}.`,
        `You've deposited $${deposit} to your account.`,
        `Current balance: $${this.accounts[loginID].balance}.`);
    },
    //method that transfers money between two accounts
    transfer: function (fromID, toID, amount) {
        if (!checkNeg(amount, this.accounts[fromID].balance)) {
            return 'fail';
        }
        this.accounts[fromID].balance = this.accounts[fromID].balance - amount;
        this.accounts[toID].balance = this.accounts[toID].balance + amount;
        console.log(`Welcome Back ${this.accounts[fromID].name}.`,
        `You've transferred $${amount} to ${this.accounts[toID].name}'s account.`,
        `Current balance: $${this.accounts[fromID].balance}.`);  
    }
}


//Calling functions to debug

bank.addAccount('Ethan', 900);
bank.addAccount('NSW Revenue', 1000000000);

bank.totalSumAllAccounts();

bank.withdrawFromAccount(0, 800);
bank.withdrawFromAccount(0, -800);

bank.depositToAccount(0, 400);
bank.depositToAccount(0, -400);

bank.transfer(0, 1, 500);
bank.transfer(0, 1, -500);

bank.withdrawFromAccount(0, 800);


bank.addAccount('addAccountTestNeg', -100);


