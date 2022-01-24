$(document).ready(function(){
    console.log('is it working?');

    let checkingBalance = 0;
    let savingsBalance = 0;

    $('#checking-deposit').on('click', function(){
        const $checkAmount = Number($('#checking-amount').val()); // $check Amount to to input the amount place holder //number() is the method of defining numbers when type in numbers
        // console.log('deposit working????');
        // console.log('checking', $checkAmount);
        checkingBalance = $checkAmount + checkingBalance;
        $('#checking-balance').html(checkingBalance);// this to change the balance on screen
        updateCheckBalance();
    });

    $('#checking-withdraw').on('click', function(){
        // console.log('withdraw button working??');
        const $checkAmount =  Number($('#checking-amount').val());// $check Amount to input the amount in the place holder //number() is the method of defining numbers when type in numbers
        checkingBalance = checkingBalance - $checkAmount; //  you need the current balance to - the total check amount
        // console.log(checkingBalance);
        $('#checking-balance').html(checkingBalance);// to change the balance on screen.
        updateCheckBalance();
    });

    const updateCheckBalance = function(){
            if(checkingBalance === 0){
                $('#checking-balance').css('background-color','red');
            } 
            else if (checkingBalance > 0){
                $('#checking-balance').css('background-color','lightGray');
            }
            if(savingsBalance === 0){
                $('#savings-balance').css('background-color', 'red');
            }
            else if (savingsBalance > 0){
                $('#savings-balance').css('background-color','lightGray');
            }
    };

    $('#savings-deposit').on('click', function(){
        // console.log('check saving deposit working?');
        const $checkSavingAmount = Number($('#savings-amount').val());//val() is to define the number value for HTML
        console.log($checkSavingAmount);// to check placeholder working
        savingsBalance = $checkSavingAmount + savingsBalance;
        $('#savings-balance').html(savingsBalance);
        updateCheckBalance();
    })


    $('#savings-withdraw').on('click', function(){
        // console.log('check saving withdraw working?');
        const $checkSavingAmount = Number($('#savings-amount').val());
        // console.log($checkSavingAmount);// to check the placeholder working
        savingsBalance = savingsBalance - $checkSavingAmount;
        $('#savings-balance').html(savingsBalance);
        updateCheckBalance();// this is to change the color when goes down to 0
    })

    

})// end of jquery document