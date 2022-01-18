let checkingBalance = 0;
let savingsBalance = 0;

const zero = function(balanceAccount){
$(`#${balanceAccount}`).addClass("zero");
}
const notZero = function(balanceAccount){
$(`#${balanceAccount}`).removeClass("zero");
}


$('#checking-deposit').on('click', function(){  

    const depositAmount = parseInt($('#checking-amount').val());
    checkingBalance += depositAmount;
    $('#checking-balance').html('$' + checkingBalance)

    if(checkingBalance > 0){       
        notZero('checking-balance')
    }     

}) // checking deposit
    

$('#checking-withdraw').on('click', function(){

    const accountBalance = savingsBalance + checkingBalance;
    const withdrawAmount = parseInt($('#checking-amount').val());

    if (withdrawAmount <= checkingBalance){ // regular withdrawal
        
        checkingBalance -= withdrawAmount;
        $('#checking-balance').html('$' + checkingBalance)

    } else if (withdrawAmount >= checkingBalance && withdrawAmount <= accountBalance){ // overdraft

        checkingBalance -= withdrawAmount;
        savingsBalance += checkingBalance
        $('#savings-balance').html('$' + savingsBalance);

    } else { // not enough money

        console.log(`Not enough funds in your Account!\nYour total account balance is: $${accountBalance}`)
        
    } // withdrawal if

    if (checkingBalance <= 0){ 

        checkingBalance = 0
        zero('checking-balance');
        $('#checking-balance').html('$' + '0')

        if (checkingBalance && savingsBalance === 0){
            zero("savings-balance")
        }
    } // if $0

}) // checking withdraw


$('#savings-deposit').on('click', function(){
    
    notZero('savings-balance')
    const depositAmount = parseInt($('#savings-amount').val());
    savingsBalance += depositAmount;
    $('#savings-balance').html('$' + savingsBalance)

}) // savings deposit


$('#savings-withdraw').on('click', function(){

    const accountBalance = checkingBalance + savingsBalance;
    const withdrawAmount = parseInt($('#savings-amount').val());

    if (withdrawAmount <= savingsBalance){ // regular withdrawal
        
        savingsBalance -= withdrawAmount;
        $('#savings-balance').html('$' + savingsBalance)

    } else if (withdrawAmount >= savingsBalance && withdrawAmount <= accountBalance){ // overdraft

        savingsBalance -= withdrawAmount;
        checkingBalance += savingsBalance
        $('#checking-balance').html('$' + checkingBalance);    

    } else { // not enough money

        console.log(`Not enough funds in your Account!\nYour total account balance is: $${accountBalance}`)
        
    } // withdrawal if

    if (savingsBalance <= 0){ 

        savingsBalance = 0
        zero('savings-balance');
        $('#savings-balance').html('$' + '0')

        if (savingsBalance && checkingBalance === 0){
            zero("checking-balance")
        }
    } // if $0

}) // savings withdraw




zero('checking-balance');
zero('savings-balance');