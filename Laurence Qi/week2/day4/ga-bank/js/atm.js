// Account Constructor 
function Account(accType, balance = 0) {
    this.accType = accType; // just a string
    this.balance = balance;
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
    return amount <= allAcc[0].balance + allAcc[1].balance;
}
// module.exports = Account; //UNCOMMENT THIS TO TEST

const checkingAcc = new Account('checking', 1000);
const savingAcc = new Account('savings', 500);
const allAcc = [checkingAcc, savingAcc]; // TODO: you might just want to make this an object and use the name 'checking' and 'savings' as the keys to access the object. 

//FRONT END: run a function that updates all the balance values when doing a deposit or withdrawal. 
$(function() {
    const $checkingBalance = $(`#${allAcc[0].accType} div`);
    const $savingBalance = $(`#${allAcc[1].accType} div`);
    updatBalances();
    const $allBtn = $('[type="button"]');

    //updates all balance elements with the Account.balance value
    function updatBalances() {
        $checkingBalance.html('$' + checkingAcc.balance);
        $savingBalance.html('$' + savingAcc.balance);
        // console.log($checkingBalance.text());
    }

    /* The function performs the
    1. for the specific button parse the Value of the element DONEEEE
    2. get the value of the parent div (Checking || Savings) DONEEEE
    3. use these values to deposit and withdraw from the specific account. DONEEEE
    */
    $allBtn.on('click', function() {
        const btnType = $(this).attr('value');
        const accountName = $(this).parent().attr('id');
        const currentAcc = accountName === 'checking' ? checkingAcc : savingAcc;
        const amount = parseInt($(`#${accountName} [type="text"]`).val());

        btnType === 'Deposit' ? currentAcc.deposit(amount) : currentAcc.withdraw(amount); //Withdraw/Deposit. 

        updatBalances();
    });
});

//TODO: rework the html so that you can generate new accounts by pressing buttons with automatic account id generation.
//TODO: maybe have a bank id whenever a new account gets created.
//TODO: initialise this as a constructor initially then convert to class.