//FRONT END: run a function that updates all the balance values when doing a deposit or withdrawal. 
const checkingAcc = new Account('checking', 1000);
const savingAcc = new Account('savings', 500);
const allAcc = [checkingAcc, savingAcc]; // TODO: you might just want to make this an object and use the name 'checking' and 'savings' as the keys to access the object. 

//using jquery use the click events to trigger the withdrawal and deposit in the Account methods.
$(function() {
    // assign element to a prop in the Account objects. 
    for (let i = 0; i < allAcc.length; i++) {
        allAcc[i].$element = $(`#${allAcc[i].accType} div`);
    }

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