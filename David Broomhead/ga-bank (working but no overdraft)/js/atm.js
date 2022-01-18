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

//gets balance of checking account, stores integer in let variable
let checkingBalance = $('div#checking-balance.balance').html();
let checkingBalanceInt = parseInt(checkingBalance);

//gets balance of savings account and stores as integer
let savingsBalance = $('div#savings-balance.balance').html();
let savingsBalanceInt = parseInt(savingsBalance);


//function that makes background of relevant account red if balance is zero, makes it green otherwise
const monitorBalance = function(account,accountBalance){
    console.log("monitorBalance function running");
    console.log(account,accountBalance);
    if(accountBalance === 0){
        account.css('background-color','red');
    }else {
        account.css('background-color','#6C9A74');
    }
}

//function that checks amount being withdrawn is not larger than balance
//throws error if insufficient funds to deposit set amount
const checkBalance = function(accountBalance,amount){
    const totalFunds = checkingBalanceInt + savingsBalanceInt;
    if (accountBalance < totalFunds){
        throw console.log("insufficient funds");
    }else {
        useOverdraft();
    }
}

//function that deposits or withdraws user set amount to/from checking account
const updateCheckingAccount = function(){
    
    //gets value of checking deposit/withdraw amount from text field, stores as int
    let checkingAmount = $('input#checking-amount').val();
    let checkingAmountInt = parseInt(checkingAmount);


    if(this === document.querySelector('#checking-withdraw')){
        //account balance is checked to make sure withdraw can be covered
        checkBalance(checkingBalanceInt,checkingAmountInt);

        //amount multiplied by -1 so amount is withdrawn
        checkingAmountInt = -1 * checkingAmountInt;
        //adds input field amount to the balance integer
        checkingBalanceInt += checkingAmountInt;
        console.log("withdrew amount from checking",checkingAmountInt);

        //updates html with new balance amount
        $('div#checking-balance.balance').html(checkingBalanceInt)
    }
    if(this === document.querySelector('#checking-deposit')){
        //adds input field amount to the balance integer
        checkingBalanceInt += checkingAmountInt;
        console.log("deposited amount to checking",checkingAmountInt);

        //updates html with new balance amount
        $('div#checking-balance.balance').html(checkingBalanceInt)
    }
    
    //runs function to change background color to red if 0 funds
    monitorBalance($('div#checking.account'),checkingBalanceInt);
}


//function that deposits or withdraws user set amount to/from savings account
const updateSavingsAccount = function(){
    
    //gets value of savings deposit/withdraw amount from text field entered by user
    let savingsAmount = $('input#savings-amount').val();
    let savingsAmountInt = parseInt(savingsAmount);

    if(this === document.querySelector('#savings-withdraw')){
        checkBalance(savingsBalanceInt,savingsAmountInt);

        savingsAmountInt = -1 * savingsAmountInt;
        //adds input field amount to the balance integer
        savingsBalanceInt += savingsAmountInt;
        console.log("withdrew amount from savings",savingsAmountInt);

        //updates html with new balance amount
        $('div#savings-balance.balance').html(savingsBalanceInt)
    }
    if(this === document.querySelector('#savings-deposit')){
        //adds input field amount to the balance integer
        savingsBalanceInt += savingsAmountInt;
        console.log("deposited amount to savings",savingsAmountInt);

        //updates html with new balance amount
        $('div#savings-balance.balance').html(savingsBalanceInt)
    }  
    //runs function to change background color to red if 0 funds
    monitorBalance($('div#savings.account'),savingsBalanceInt);
}

//listens for click events on checking-deposit and withdraw buttons, adds/subtracts funds using function updateCheckingAccount
$('#checking-deposit').on("click",updateCheckingAccount);
$('#checking-withdraw').on("click",updateCheckingAccount);

//listens for click events on savings-deposit and withdraw buttons, adds/subtracts funds using function updatesavingsAccount
$('#savings-deposit').on("click",updateSavingsAccount);
$('#savings-withdraw').on("click",updateSavingsAccount);
