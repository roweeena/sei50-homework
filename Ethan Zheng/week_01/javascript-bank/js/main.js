console.log("JavaScript Bank Loaded");

//TO DO - Need to refactor repeated code.
//BUGS
    //Negative integers are accepted currently - will fix

//define global variables here
let uniqueID = 0;

//declare functions here

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
        this.accounts.push(newAccount);
        uniqueID++;     //This will ensure that no two accounts will ever have the same ID
        console.log(`Welcome ${newAccount.name} to the Bank.`,
        `Your Unique ID is ${newAccount.ID}. Please store this number safe for future use.`, 
        `Current balance: $${newAccount.balance}. `); 
    },
    //method that allows the user to withdraw money from account
    withdrawFromAccount: function (loginID, withdraw) {
        if (this.accounts[loginID].balance < withdraw) {
            console.log('Unfortunately, your account balance is too low to complete this withdrawal.');
            return 'fail';
        }
        this.accounts[loginID].balance = this.accounts[loginID].balance - withdraw;
        console.log(`Welcome Back ${this.accounts[loginID].name}.`,
        `You've withdrawn $${withdraw} from your account.`,
        `Current balance: $${this.accounts[loginID].balance}.`);
    },
    //method that allows the user to deposit from account
    depositToAccount: function (loginID, deposit) {
        this.accounts[loginID].balance = this.accounts[loginID].balance + deposit;
        console.log(`Welcome Back ${this.accounts[loginID].name}.`,
        `You've deposited $${deposit} to your account.`,
        `Current balance: $${this.accounts[loginID].balance}.`);
    },
    //method that transfers money between two accounts
    transfer: function (fromID, toID, amount) {
        if (this.accounts[fromID].balance < amount) {
            console.log('Unfortunately, your account balance is too low to complete this withdrawal.');
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

bank.depositToAccount(0, 400);
bank.transfer(0, 1, 500);

bank.withdrawFromAccount(0, 800);


