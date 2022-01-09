//FRONT END: run a function that updates all the balance values when doing a deposit or withdrawal. 
const checkingAcc = new Account('checking', 1000);
const savingAcc = new Account('savings', 500);
const allAcc = [checkingAcc, savingAcc]; //TODO: you might just want to make this an object and use the name 'checking' and 'savings' as the keys to access the object. 

//using jquery use the click events to trigger the withdrawal and deposit in the Account methods.
$(function() {
    // assign element to a prop in the Account objects.
    allAcc.forEach(acc => { acc.$element = $(`#${acc.accType} div`) })

    updatBalances();
    const $allBtn = $('[type="button"]');

    //updates all balance elements with the Account.balance value
    function updatBalances() {
        // update balances and background color. 
        allAcc.forEach(acc => {
            acc.$element.html('$' + acc.balance);
            acc.balance <= 0 ? acc.$element.css('background-color', 'red') : acc.$element.css('background-color', '#E3E3E3');
        });
    }

    // Parses withdrawal/depositing amount and updates the account state, 
    $allBtn.on('click', function() {
        const btnType = $(this).attr('value');
        const accountName = $(this).parent().attr('id');
        // convert this to use a loop and finding out the correct instance to allow for more than 2 accounts with this function. 
        const currentAcc = accountName === 'checking' ? checkingAcc : savingAcc;
        const amount = parseInt($(`#${accountName} [type="text"]`).val());

        btnType === 'Deposit' ? currentAcc.deposit(amount) : currentAcc.withdraw(amount); //Withdraw/Deposit. 

        updatBalances();
    });

    function addAccount(accType, Initialbalance) {
        allAcc.push(new Account(accType, Initialbalance));
        // adds a new div with the relavent info to the page. 
    }

    addAccount('checking2')
});