//FRONT END: run a function that updates all the balance values when doing a deposit or withdrawal. 
const checkingAcc = new Account('checking', 1000);
const savingAcc = new Account('savings', 500);
const allAcc = [checkingAcc, savingAcc]; //TODO: you might just want to make this an object and use the name 'checking' and 'savings' as the keys to access the object. 
let $allBtn;

//using jquery use the click events to trigger the withdrawal and deposit in the Account methods.
$(function() {
    // assign element to a prop in the Account objects.
    allAcc.forEach(acc => { acc.$element = $(`#${acc.accType} div`) }) //TODO: figure out why this doesn't work for the last part

    updatBalances();
    $allBtn = $('#content [type="button"]');

    //updates all balance elements with the Account.balance value
    function updatBalances() {
        // update balances and background color. 
        allAcc.forEach(acc => {
            acc.$element.html('$' + acc.balance);
            acc.balance <= 0 ? acc.$element.css('background-color', 'red') : acc.$element.css('background-color', '#E3E3E3');
        });
    }


    // Parses withdrawal/depositing amount and updates the account state, 
    checkBtns();

    // each time there are new elements you need to bind their input boxes and events to update the state of the respective Account Obj
    function checkBtns() {
        $allBtn.on('click', function() {
            console.log('button clicked');
            const btnType = $(this).attr('value');
            const accountName = $(this).parent().attr('id');
            const currentAcc = allAcc.find(acc => acc.accType === accountName); // find the specific acc object belonging to the div in which button was pressed
            // const currentAcc = accountName === 'checking' ? checkingAcc : savingAcc;
            const amount = parseInt($(`#${accountName} [type="text"]`).val());

            btnType === 'Deposit' ? currentAcc.deposit(amount) : currentAcc.withdraw(amount); //Withdraw/Deposit. 

            updatBalances();
        });
    }

    $('#add-acc').on('click', function() {
        addAccount(`additionalAcc${allAcc.length -1}`);
        updatBalances();
    });

    function addAccount(accType, intialBalance) {
        allAcc.push(new Account(accType, intialBalance = 0));

        const $wrapper = $('<div/>', { class: 'account', id: accType });
        const $header = $(`<h1>${accType}<h1/>`);
        const $balanceDisplay = $('<div/>', { class: 'balance', id: `${accType}-balance`, style: 'background-color: rgb(227, 227, 227)', text: `$${intialBalance}` });
        const $textInput = $('<input/>', { id: `${accType}-amount`, type: 'text', placeholder: 'enter an amount' })
        const $depositBtn = $('<input/>', { id: `${accType}-deposit`, type: 'button', value: 'Deposit' })
        const $withdrawBtn = $('<input/>', { id: `${accType}-withdraw`, type: 'button', value: 'Withdraw' })

        $wrapper
            .append($header)
            .append($balanceDisplay)
            .append($textInput)
            .append($depositBtn)
            .append($withdrawBtn)

        if (allAcc.length % 2 === 1) {
            $wrapper.append($('<br>'))
        }

        $wrapper.appendTo($('#content'));

        allAcc[allAcc.length - 1].$element = $(`#${allAcc[allAcc.length - 1].accType} div`);
        // console.log('the length of allAcc is:', allAcc.length);
        // adds a new div with the relevent info to the page. 
        $allBtn = $('#content [type="button"]');

        checkBtns();

    }


});