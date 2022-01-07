// DO the backend bank code first. 
// Do some testing with it, then after get the values generated from the bank backend to bind to the visual elements.

function Account(accType, balance = 0) { //TODO: initialise this as a constructor initially then convert to class. 
    this.accType = accType; // just a string
    this.balance = balance;
    this.deposit = function(amount) {
        this.balance += amount;
    }
    this.withdraw = function(amount) { //TODO: figure out how to check other account balances. MAYBE HAVE BANK NUMBERS AND A PROPERTY IN THIS CONSTRUCTOR THAT IS ARR WITH LINKS TO OTHER ACCOUNTS
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            // attempting overdraft
            otherAccCanOverDraft(amount) ? this.balance -= balance : console.log('Can not withdraw, current balance is too low :(');
            //TODO: remove the money from one of the other accounts and zero the balance here. 
        }
    }
    this.zeroBalance = function() { //only use this function when needing to overdraft. 
            this.balance = 0;
        }
        //TODO: put the bank element as a property here. 
}

function otherAccCanOverDraft(amount) {
    return amount <= allAcc[0].balance + allAcc[1].balance; //TODO: rework the sum account balances.
}

const checkingAcc = new Account('checking');
const savingAcc = new Account('saving');
const allAcc = [checkingAcc, savingAcc];


// I think I need to make a person object and add the actual accounts to their key values pairs, upon which point I can loop 

// module.exports = Account;

//TODO: determine if I should be exporting the instance of the object or the actual function and generate a copy there. 

//FRONT END: run a function that updates all the balance values when doing a deposit or withdrawal. 
//TODO: if you use the same names for the props as in the the front end code you can save alot of repeated code.

//TODO: rework the html so that you can generate new accounts by pressing buttons with automatic account id generation.
$(function() {
    const $checkingBalance = $(`#${allAcc[0].accType} div`);
    $checkingBalance.html('$' + allAcc[0].balance);
    console.log($checkingBalance.html());
});