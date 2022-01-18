// Keep track of the checking and savings balances somewhere
let updatedChecking = 0;
let updatedSavings = 0;
let updatedTotalBalance = updatedChecking + updatedSavings;


const button = $("input[type='button']").on('click', function(){ 


    // the local this
    const $thisButtonsThis = $(this)

    // is it checking or saving? Spits out 'savings' or 'checking'
    const checkingOrSaving = $(this).parent().attr('id')

    // is it deposit or withdraw? Spits out 'Deposit' or 'Withdraw'.
    const functionRequested = $(this).val();

    // where I want to color
    const backgroundArea = $(this).parent().find('div')

    // finds out what it says in amount box, regardless of where we are and turns that amount in to a number we can use. also gives number for us to assess if we should allow what is input in field! 
    const $theCurrentDivsAmountBox = $(this).parent().find('input').eq(0);
    const inputToCheck = $theCurrentDivsAmountBox.val()
    const theValueOfCurrentDivsAmountBox = parseFloat($theCurrentDivsAmountBox.val()).toFixed(2)
    const finalAmountToSend = parseFloat(theValueOfCurrentDivsAmountBox)

    // balance positions
    const $balanceHTML = $(this).parent().find('div')

    // functions

    // this just checks if the original input is a positive num, so we can accept/reject it
    const checkIfPositiveNum = function (amount) {
        return /^[0-9.]+$/.test(amount)
    };

    // changes color of background
    const $changeColorOfBackground = function () {

        // FIXME: The issue is that on overdraft it still turns the other background color the correct colo, when ti
        amountToCheck = $thisButtonsThis.parent().find('div').html()

        if (amountToCheck !== '$0') {
            backgroundArea.css({
                backgroundColor: 'blue',
            })
        } else {
            backgroundArea.css({
                backgroundColor: 'red',
            })
        }
    }

    const overdraft = function (amount, checkingOrSaving) {
        if (checkingOrSaving === 'checking') {
            let amountNeededFromOtherAccount = (updatedChecking - amount) * -1;
            withdraw(updatedChecking,'checking')
            withdraw(amountNeededFromOtherAccount, 'savings')
        }
        else if (checkingOrSaving === 'savings') {
            let amountNeededFromOtherAccount = (updatedChecking - amount) * -1;
            withdraw(updatedChecking,'savings')
            withdraw(amountNeededFromOtherAccount, 'checking')
        }
    }

    // checks which account it is in, then deposits cash
    const deposit = function (amount, checkingOrSaving) {

        if (checkingOrSaving === 'checking') {

            updatedChecking += amount;
            updatedTotalBalance += amount;
            $thisButtonsThis.parent().find('div').html(`$${updatedChecking}`)

        } else {

            updatedSavings += amount;
            updatedTotalBalance += amount;
            $thisButtonsThis.parent().find('div').html(`$${updatedSavings}`)

        }
    };

    // checks which account it is in, then withdraws cash IF it is available
    const withdraw = function (amount, checkingOrSaving) {


        if (checkingOrSaving === 'checking') {

            if ((updatedChecking - amount) >= 0) {

                updatedChecking -= amount;
                updatedTotalBalance -= amount;
                $("#checking-balance.balance").html(`$${updatedChecking}`)

            } 
            else if ((updatedTotalBalance - amount) >= 0) {

                overdraft(amount, checkingOrSaving);

            } 
            else {
                // TODO: Must turn this in to visible warning
                console.log('WARNING: Not enough cash in current account for withdrawal.')
            }

        } if (checkingOrSaving === 'savings') {


            if ((updatedSavings - amount) >= 0) {

                updatedSavings -= amount;
                updatedTotalBalance -= amount;
                $("#savings-balance.balance").html(`$${updatedSavings}`)

            } else if ((updatedTotalBalance - amount) >= 0) {

                overdraft(amount, checkingOrSaving);

            }
            else {
                // TODO: Must turn this in to visible warning
                console.log('WARNING: Not enough cash in current account for withdrawal.')                
            }

        }
        $changeColorOfBackground()
    };    

    // now build the parent function
    const amendAmount = function (amount, checkingOrSaving) {

        // console.log('the 3 variables in amendAmount are: ', amount, checkingOrSaving, depositOrWithdraw)

        // 1. if amount in input is a number
        if ( checkIfPositiveNum (inputToCheck) === true) {

            // 2. if it is just a simple deposit 
            if ( (functionRequested === 'Deposit')) {

                deposit(amount,checkingOrSaving)

            } 
            
            // 3. if it is a withdrawal,
            else if (functionRequested === 'Withdraw') {

                withdraw(amount,checkingOrSaving)

            }
        

        } else {
            console.log('We need to serve an error message here: input amout is NaN');
        }
    }

    amendAmount(finalAmountToSend, checkingOrSaving, functionRequested)
    $changeColorOfBackground()

}) 