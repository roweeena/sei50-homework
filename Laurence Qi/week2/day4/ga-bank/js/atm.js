// Account Constructor 
function Account(accType, balance = 0) {
    this.accType = accType; // just a string
    this.balance = balance;
    this.deposit = function(amount) {
        if (this.isNumber(amount)) {
            this.balance += amount;
        } else {
            console.log("please enter a number into the diplay box");
        }
    };
    this.withdraw = function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            canOverDraft(amount) ? this.balance -= balance : console.log('Can not withdraw, current balance is too low :(');
        }
    };
    this.zeroBalance = function() { //only use this function when needing to overdraft. 
        this.balance = 0;
    };
    //TODO: put the bank element as a property here. 
    this.isNumber = function(amount) {
        return typeof amount === 'number';
    }
}

function canOverDraft(amount) {
    return amount <= allAcc[0].balance + allAcc[1].balance;
}
// module.exports = Account; //UNCOMMENT THIS TO TEST

const checkingAcc = new Account('checking', 1000);
const savingAcc = new Account('savings', 500);
const allAcc = [checkingAcc, savingAcc];

//TODO: use the same names for the props as in the the front end to DRY your code

//FRONT END: run a function that updates all the balance values when doing a deposit or withdrawal. 
$(function() {
    const $checkingBalance = $(`#${allAcc[0].accType} div`);
    const $savingBalance = $(`#${allAcc[1].accType} div`);
    updatBalances();

    const $depositBtn = $('#checking-deposit');
    const $withdrawBtn = $('#checking-withdraw');

    //update all balances with the Account.balance value
    function updatBalances() {
        $checkingBalance.html('$' + checkingAcc.balance); //update balance
        $savingBalance.html('$' + savingAcc.balance); //update balance

        console.log($checkingBalance.text());
    }

    $depositBtn.on('click', function() {
        checkingAcc.deposit(parseInt($('#checking-amount').val()));
        updatBalances();
    })

    $withdrawBtn.on('click', function() {
        checkingAcc.withdraw(parseInt($('#checking-amount').val()));
        // console.log(`the current balance is ${checkingAcc.balance}`);
        updatBalances();
        // updatBalance()
    }); //TODO: figure out why you can go to -$1000 just by continuously withdrawing. 
    // make a jquery system that more easily adjusts the balances when depositing and withdrawing
});

//TODO: rework the html so that you can generate new accounts by pressing buttons with automatic account id generation.
//TODO: maybe have a bank id whenever a new account gets created.
//TODO: initialise this as a constructor initially then convert to class.