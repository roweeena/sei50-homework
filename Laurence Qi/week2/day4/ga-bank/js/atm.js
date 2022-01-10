// Account Constructor 
function Account(accType, Initialbalance = 0) {
    this.accType = accType; // This serves a sort of ID
    this.balance = Initialbalance;

    this.deposit = function(amount) {
        if (this.isNumber(amount)) {
            this.balance += amount;
        } else {
            alert('Please enter a number into the diplay box');
        }
    };
    this.withdraw = function(amount) {
        // FIXME: convert this to if else. 
        canOverDraft(amount) ? this.balance -= amount : alert('Can not withdraw, total account balance is too low :(');
    };
    this.zeroBalance = function() { //only use this function when needing to overdraft. 
        this.balance = 0;
    };
    this.isNumber = function(amount) {
        return !Number.isNaN(amount);
    }
}

function canOverDraft(amount) {
    const totalBalance = allAcc.map(x => x.balance).reduce((a, b) => a + b);
    return amount <= totalBalance;
}
module.exports = Account; //UNCOMMENT THIS TO TEST