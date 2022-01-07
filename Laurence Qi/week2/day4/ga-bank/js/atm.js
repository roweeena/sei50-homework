// DO the backend bank code first. 
// Do some testing with it, then after get the values generated from the bank backend to bind to the visual elements.

function Account(accType, balance = 0) { //TODO: initialise this as a constructor initially then convert to class. 
    this.accType = accType; // just a string
    this.balance = balance;
    this.deposit = function(amount) {
        this.balance += amount;
    }
    this.withdraw = function(amount) { //TODO: figure out how you can get this account to reference the other's balance when attempting for overdrafting
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            // attempting overdraft
            otherAccCanOverDraft(amount) ? this.balance -= balance : console.log('Can not withdraw, current balance is too low :(');
        }
    }
    this.zeroBalance = function() { //only use this function when needing to overdraft. 

    }
}

function otherAccCanOverDraft(amount) {
    return amount <= allAcc[0].balance + allAcc[1].balance; //TODO: rework the sum account balances.
}

const checkingAcc = new Account('checking');
const savingAcc = new Account('saving');
const allAcc = [checkingAcc, savingAcc];

// I think I need to make a person object and add the actual accounts to their key values pairs, upon which point I can loop 

module.exports = Account;

//TODO: determine if I should be exporting the instance of the object or the actual function and generate a copy there. 

//FRONT END: Capable of entering amount then withdrawing/depositing it / which account