// Account Constructor 
function Account(accType, Initialbalance = 0) {
    this.accType = accType; // just a string
    this.balance = Initialbalance;

    this.deposit = function(amount) {
        if (this.isNumber(amount)) {
            this.balance += amount;
        } else {
            alert('Please enter a number into the diplay box');
        }
    };
    this.withdraw = function(amount) {
        canOverDraft(amount) ? this.balance -= amount : alert('Can not withdraw, total account balance is too low :(');
    };
    this.zeroBalance = function() { //only use this function when needing to overdraft. 
        this.balance = 0;
    };
    //TODO: put the bank element as a property here. 
    this.isNumber = function(amount) {
        return typeof amount === 'number' && !Number.isNaN(amount);
    }
}

function canOverDraft(amount) {
    const totalBalance = allAcc.map(x => x.balance).reduce((a, b) => a + b);
    console.log('total balance is:', totalBalance);
    return amount <= totalBalance;
}
// module.exports = Account; //UNCOMMENT THIS TO TEST

//TODO: rework the html so that you can generate new accounts by pressing buttons with automatic account id generation.
//TODO: maybe have a bank id whenever a new account gets created.
//TODO: initialise this as a constructor initially then convert to class.