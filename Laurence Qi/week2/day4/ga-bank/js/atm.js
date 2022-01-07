// DO the backend bank code first. 


// Do some testing with it, then after get the values generated from the bank backend to bind to the visual elements.

const depositing = function(amount, account) {

}

function Account(accType) { //TODO: initialise this as a constructor initially then convert to class. 
    this.balance = 0;
    this.accType = accType; // just a string
    this.deposit = function(amount) {
        this.balance += amount;
    }
    this.withdraw = function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('Can not withdraw, current balance is too low :(');
        }
    }
}


//FRONT END: Capable of entering amount then withdrawing/depositing it / which account