// console.log('atm js loaded', $);


$(function(){
    
    const $checkingBgd = $('#checking');
    const $checkingBal = $('#checking-balance');
    const $checkingAmt = $('#checking-amount');
    const $checkingDepositBtn = $('#checking-deposit')
    const $checkingWithdrawBtn = $('#checking-withdraw')
    
    const $savingsBgd = $('#savings');
    const $savingsBal = $('#savings-balance');
    const $savingsAmt = $('#savings-amount');
    const $savingsDepositBtn = $('#savings-deposit')
    const $savingsWithdrawBtn = $('#savings-withdraw')
    
    // CHECKING DEPOSIT
    $checkingDepositBtn.on('click', function(){

        const requestAmount = $checkingAmt.val();

        if (Math.sign(requestAmount) === 1){ // checking if the the value entered in the input is a positive number

            updatePage(deposit(checking, parseFloat(requestAmount))); // sending the deposit amount to the bank and running a page update on the returned array

        } else {
            console.log(`${requestAmount} is not a valid input`);
        }

    });

    // SAVINGS DEPOSIT
    $savingsDepositBtn.on('click', function(){

        const requestAmount = $savingsAmt.val();

        if (Math.sign(requestAmount) === 1){

            updatePage(deposit(savings, parseFloat(requestAmount)));

        } else {
            console.log(`${requestAmount} is not a valid input`);
        }

    });
    
    // CHECKING WITHDRAW
    $checkingWithdrawBtn.on('click', function(){

        const requestAmount = $checkingAmt.val();

        if (Math.sign(requestAmount) === 1){

            updatePage(withdrawChecking(parseFloat(requestAmount)));
           
        } else {
            console.log(`${requestAmount} is not a valid input`);
        }

    });

    // SAVINGS WITHDRAW
    $savingsWithdrawBtn.on('click', function(){

        const requestAmount = $savingsAmt.val();

        if (Math.sign(requestAmount) === 1){

            updatePage(withdrawSavings(parseFloat(requestAmount)));
           
        } else {
            console.log(`${requestAmount} is not a valid input`);
        }

    });

    // UPDATE THE PAGE
    const updatePage = function(arr){ // expects an array as an argument with checking balance as index 0 and savings as index 1.

        // console.log(arr);

        $checkingBal.html(`$${arr[0]}`); // set the checking acc balance

        $savingsBal.html(`$${arr[1]}`); // set the savings acc balance

        
        if (!arr[0]){                        // if the checking balance is 0, set the zero class on the checking div   
            $checkingBgd.addClass('zero');
        }

        if (arr[0]){                        // if the checking balance is not 0, remove the zero class
            $checkingBgd.removeClass('zero');
        }

        if (!arr[1]){
            $savingsBgd.addClass('zero');
        }

        if (arr[1]){
            $savingsBgd.removeClass('zero');
        }
        
    }

});
