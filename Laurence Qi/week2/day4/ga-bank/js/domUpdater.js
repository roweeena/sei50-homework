/* Using jquery update the html element values to:
1. reflect balance 
2. use deposit/withdraw methods from correct Account Obj instances
*/

const allAcc = [new Account('checking', 1000), new Account('savings', 500)] // Initialise the two default accounts

//using jquery use the click events to trigger the withdrawal and deposit in the Account methods.
$(function() {
    // assign each acc to a prop in the Account objects.
    allAcc.forEach(acc => {
        acc.$element = $(`#${acc.accType} div`)
        checkBtn(acc.accType);
    });

    updateBalances();

    //bind the 'Add new account' button
    $('#add-acc').on('click', function() {
        addAccount(`additionalAcc${allAcc.length -1}`);
        updateBalances();
    });

    //updates all balance elements with the Account.balance value
    function updateBalances() {
        // update balances and background color. 
        allAcc.forEach(acc => {
            acc.$element.html('$' + acc.balance);
            acc.balance <= 0 ? acc.$element.css('background-color', 'red') : acc.$element.css('background-color', '#E3E3E3');
        });
    }

    // With each new account bind the buttons to perform the deposit/withdraw methods of the respective obj
    function checkBtn(accType) { // TODO: TALK ABOUT PROBLEM WITH THIS.
        $(`#${accType} [type="button"]`).on('click', function() { //This used to use allBtns
            const btnType = $(this).attr('value');
            const accountName = $(this).parent().attr('id');
            const currentAcc = allAcc.find(acc => acc.accType === accountName); // find the specific acc object belonging to the div in which button was pressed
            const amount = parseInt($(`#${accountName} [type="text"]`).val());

            (btnType === 'Deposit') ? currentAcc.deposit(amount): currentAcc.withdraw(amount); // perform withdraw/deposit depending on btntype 

            updateBalances();
        });
    }

    // push a new instance of the Account obj to the allAcc arr and add the mapped Account element to the DOM 
    function addAccount(accType, initialBalance) {
        allAcc.push(new Account(accType, intialBalance = 0));
        if (allAcc.length % 2 === 1) {
            $('#content').append($('<br/>'))
        }

        createNewAccElement(accType, initialBalance);
    }

    function createNewAccElement(accType, initialBalance) {
        const $wrapper = $('<div/>', { class: 'account', id: accType });
        const $header = $(`<h1>${accType}<h1/>`);
        const $balanceDisplay = $('<div/>', { class: 'balance', id: `${accType}-balance`, style: 'background-color: rgb(227, 227, 227)', text: `$${initialBalance}` });
        const $textInput = $('<input/>', { id: `${accType}-amount`, type: 'text', placeholder: 'enter an amount' })
        const $depositBtn = $('<input/>', { id: `${accType}-deposit`, type: 'button', value: 'Deposit' })
        const $withdrawBtn = $('<input/>', { id: `${accType}-withdraw`, type: 'button', value: 'Withdraw' })

        $wrapper
            .append($header)
            .append($balanceDisplay)
            .append($textInput)
            .append($depositBtn)
            .append($withdrawBtn)
            .appendTo($('#content'));

        allAcc[allAcc.length - 1].$element = $(`#${allAcc[allAcc.length - 1].accType} div`);

        checkBtn(accType);
    }
});