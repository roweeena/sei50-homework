// # Title: GA ATM App

// ### Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.

// ### Objectives:
// - DOM selection, appending, removal, updating
// - code organisation: separation of concerns, i.e. _display logic_ vs. _business logic_

// ### Specification:

// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.


// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.

// If the withdrawal amount is more than the combined account balance, ignore it.

// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

// ___

// #### Separation of Concerns

// Spend some time thinking about the following before you even start writing code: can you separate 
// - the GUI code (event handlers for form input or buttons) 
// from 
// - the banking code (deposit and withdrawal between accounts, checking for overdraft etc) 
// as much as possible? 

// Ideally you would be able to test all the banking functions from the console, and then connect them to the GUI code with the minimum amount of overlap or points of contact. 

// _These two parts of the system (display logic and business logic) should know as little as possible about each other._

//++++++++++++++++++++++++++++++++++
//+This file handles business logic+
//++++++++++++++++++++++++++++++++++


console.log("ATM.js loaded")



//stores button values in variables
const checkingDepositButton = document.querySelector('#checking-deposit');
const checkingWithdrawButton = document.querySelector('#checking-withdraw');
const savingsDepositButton = document.querySelector('#savings-deposit');
const savingsWithdrawButton = document.querySelector('#savings-withdraw');

//account divs stored in variables
const checkingAccountDiv = $('div#checking.account');
const savingsAccountDiv = $('div#savings.account');

//function that makes background of relevant account red if balance is zero, makes it green otherwise
const monitorBalance = function(checkingBalanceInt,savingsBalanceInt){

    if(checkingBalanceInt === 0){
        checkingAccountDiv.css('background-color','red');
    }else {
        checkingAccountDiv.css('background-color','#6C9A74');
    }

    if(savingsBalanceInt === 0){
        savingsAccountDiv.css('background-color','red');
    }else {
        savingsAccountDiv.css('background-color','#6C9A74');
    }
}

//function that checks amount being withdrawn is not larger than balance
//throws error if insufficient funds to deposit set amount
const checkBalance = function(primaryAccount,primaryAccountBalance,secondaryAccount,secondaryAccountBalance,amount){
    if ((primaryAccountBalance + secondaryAccountBalance) < amount){
        throw console.log("insufficient funds");
    }
    if (primaryAccountBalance < amount){ 
        useOverdraft(primaryAccount,primaryAccountBalance,secondaryAccount,secondaryAccountBalance,amount);
    }
}


//calculates new balance and returns value so it can be updated
const changeFunds = function(accountBalance,amount){
    accountBalance = accountBalance + amount;
    return accountBalance;
} //changeFunds()

const updateBalance = function(account,newBalance){
    account.html(newBalance);
}

//function the manage overdraft transactions
const useOverdraft = function(primaryAccount,primaryAccountBalance,secondaryAccount,secondaryAccountBalance,withdrawAmount){
    
    let firstWithdraw = primaryAccountBalance;
    let secondWithdraw = withdrawAmount - firstWithdraw;
    firstWithdraw = -Math.abs(firstWithdraw);
    secondWithdraw = -Math.abs(secondWithdraw);
    let newBalancePrimary = changeFunds(primaryAccountBalance,firstWithdraw);
    let newBalanceSecondary = changeFunds(secondaryAccountBalance,secondWithdraw);
    
    updateBalance(primaryAccount,newBalancePrimary);
    updateBalance(secondaryAccount,newBalanceSecondary);

    monitorBalance(newBalancePrimary,newBalanceSecondary);
    throw console.log("overdraft function complete");
}

//function to update account with deposited or withdrawn funds
const getAccount = function(){

    //gets balance of checking account, stores integer in variable
    let checkingBalance = $('div#checking-balance.balance');
    let checkingBalanceInt = parseInt(checkingBalance.html());

    //gets balance of savings account and stores as integer
    let savingsBalance = $('div#savings-balance.balance');
    let savingsBalanceInt = parseInt(savingsBalance.html());

    //gets value from checking input field
    let checkingAmount = $('input#checking-amount').val();
    let checkingAmountInt = parseInt(checkingAmount);

    //gets value from savings input field
    let savingsAmount = $('input#savings-amount').val();
    let savingsAmountInt = parseInt(savingsAmount);


    if(this === checkingDepositButton){
        let newBalance = changeFunds(checkingBalanceInt,checkingAmountInt);
        checkingAmountInt = Math.abs(checkingAmountInt);
        checkingBalanceInt = newBalance;
        checkingBalance.html(checkingBalanceInt);
        monitorBalance(checkingBalanceInt,savingsBalanceInt);
    }
    if(this === checkingWithdrawButton){
        checkBalance(checkingBalance,checkingBalanceInt,savingsBalance,savingsBalanceInt,checkingAmountInt);
        checkingAmountInt = -Math.abs(checkingAmountInt);
        let newBalance = changeFunds(checkingBalanceInt,checkingAmountInt);
        checkingBalanceInt = newBalance;
        checkingBalance.html(checkingBalanceInt);
        monitorBalance(checkingBalanceInt,savingsBalanceInt);
    }
    if(this === savingsDepositButton){
        savingsAmountInt = Math.abs(savingsAmountInt);
        let newBalance = changeFunds(savingsBalanceInt,savingsAmountInt);
        savingsBalanceInt = newBalance;
        savingsBalance.html(savingsBalanceInt);
        monitorBalance(checkingBalanceInt,savingsBalanceInt);
    }
    if(this === savingsWithdrawButton){
        checkBalance(savingsBalance,savingsBalanceInt,checkingBalance,checkingBalanceInt,savingsAmountInt);
        savingsAmountInt = -Math.abs(savingsAmountInt);
        let newBalance = changeFunds(savingsBalanceInt,savingsAmountInt); 
        savingsBalanceInt = newBalance;
        savingsBalance.html(savingsBalanceInt);
        monitorBalance(checkingBalanceInt,savingsBalanceInt);
    }

} //getAccount()


//listens for click events on checking-deposit and withdraw buttons, adds/subtracts funds using function updateCheckingAccount
$('#checking-deposit').on("click",getAccount);
$('#checking-withdraw').on("click",getAccount);

//listens for click events on savings-deposit and withdraw buttons, adds/subtracts funds using function updatesavingsAccount
$('#savings-deposit').on("click",getAccount);
$('#savings-withdraw').on("click",getAccount);

