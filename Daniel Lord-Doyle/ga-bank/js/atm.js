// Keep track of the checking and savings balances somewhere
let updatedCheckingBalance = 0;
let updatedSavingsBalance = 0;
let updatedTotalBalance = updatedCheckingBalance + updatedSavingsBalance;

// the innerHTML of the two amounts
let $checkingBalance = $("#checking-balance");
let $savingsBalance = $("#savings-balance");

// function to simply check if a number is actually a positive number
const checkIfPositiveNum = function (amount) {
    return /^[0-9.]+$/.test(amount)
};

// these following two functions simply take what is a string in the innerHTML of the dom nodes and turns them in to digits so we can manipulate them later
const $checkingBalanceDigits = function () {
    
    let balanceArray = ($("#checking-balance").html().split(''))
    balanceArray.shift()
    balanceArrayJoined = parseFloat(balanceArray.join('')).toFixed(2)
    return parseFloat(balanceArrayJoined)
};

const $savingsBalanceDigits = function () {
    let balanceArray = ($("#savings-balance").html().split(''))
    balanceArray.shift()
    balanceArrayJoined = parseFloat(balanceArray.join('')).toFixed(2)
    return parseFloat(balanceArrayJoined)
};

// where the checking and savings amounts are amended
const amendCheckingAccount = function (amount) {

    // because we did not parse in the previous function, we now need to parseInt the amount passed to us
    let isnum = /^[-0-9.]+$/.test(amount);
    let fixedAmount = parseFloat(amount).toFixed(2)
    let parsedAmount = parseFloat(fixedAmount)

    if ( isnum === true ) {
        if ((updatedCheckingBalance + amount) >= 0) {
            updatedTotalBalance += parseFloat(amount);
            updatedCheckingBalance = $checkingBalanceDigits() + parsedAmount;
            $checkingBalance.prop("innerHTML",`$${updatedCheckingBalance}`);
            $('p#checking-input-warning').empty();
            
            if (updatedCheckingBalance > 0) {
                $changeColorOfBackground($("#checking-balance"), 'green')
            } else {
                $changeColorOfBackground($("#checking-balance"), 'red')
            }
        }  
        else if ((updatedTotalBalance + amount) >= 0) {
            checkingOverdraft(amount)
        } 
        else if ((updatedSavingsBalance + amount) >= 0) {
            amendSavingsAccount(amount)
        }
        else {
            $('p#checking-input-warning').html('You do not have enough cash <br> in your account for this transaction.')
        };
    }
    else {
        $('p#checking-input-warning').html('Please insert a number')
    }
}

const amendSavingsAccount = function (amount) {

    // because we did not parse in the previous function, we now need to parseInt the amount passed to us
    let isnum = /^[-0-9.]+$/.test(amount);
    let fixedAmount = parseFloat(amount).toFixed(2)
    let parsedAmount = parseFloat(fixedAmount)

    if ( isnum === true ) {
        if ((updatedSavingsBalance + amount) >= 0) {
            updatedTotalBalance += parseFloat(amount);
            updatedSavingsBalance = $savingsBalanceDigits() + parsedAmount;
            $savingsBalance.prop("innerHTML",`$${updatedSavingsBalance}`)
            $('p#savings-input-warning').empty()
            if (updatedSavingsBalance > 0) {
                $changeColorOfBackground($("#savings-balance"), 'green')
            } else {
                $changeColorOfBackground($("#savings-balance"), 'red')
            }
        }
        else if ((updatedTotalBalance + amount) >= 0) {
                savingsOverdraft(amount)
        } 
        else if ((updatedCheckingBalance + amount) >= 0) {
            amendCheckingAccount(amount);
        } 
        else {
            $('p#savings-input-warning').html('You do not have enough cash <br> in your account for this transaction.')
        };
    }
    else {
        $('p#savings-input-warning').html('Please insert a number')
    }
}

// this manages what happens if the buttons are pressed
const depositCheckingButton = $("input#checking-deposit").on('click', function(){
    if (checkIfPositiveNum($(this).prev().val())) {
        amendCheckingAccount($(this).prev().val());
    } else {
        $('p#checking-input-warning').html('You cannot enter 0 or a negative number')
    }
  });

const withdrawCheckingButton = $("input#checking-withdraw").on('click', function() {
    if (checkIfPositiveNum(($("input#checking-amount").val()))) {
        amendCheckingAccount(($("input#checking-amount").val()) * -1)
    } else {
        $('p#checking-input-warning').html('You cannot enter 0 or a negative number')
    }
    
})

const depositSavingsButton = $("input#savings-deposit").on('click', function(){
    if (checkIfPositiveNum($(this).prev().val())) {
        amendSavingsAccount($(this).prev().val());
    } else {
        $('p#savings-input-warning').html('You cannot enter 0 or a negative number')
    }

  });

const withdrawSavingsButton = $("input#savings-withdraw").on('click', function() {
    if (checkIfPositiveNum($("input#savings-amount").val())) {
        let withdrawalAmount = ($("input#savings-amount").val() * -1);
        amendSavingsAccount(withdrawalAmount)
    } else {
        $('p#savings-input-warning').html('You cannot enter 0 or a negative number')
    }


    // console.log(withdrawalAmount)
    // console.log(typeof(withdrawalAmount))
})

// simply changes the color of the background node
const $changeColorOfBackground = function (node, color) {
    node.css('backgroundColor', color)
}

//the overdraft functions
const checkingOverdraft = function (amount) {
    let amountNeededFromOtherAccount = amount + updatedCheckingBalance
    amendCheckingAccount((updatedCheckingBalance)*-1)
    amendSavingsAccount((amountNeededFromOtherAccount))
}

const savingsOverdraft = function (amount) {
    let amountNeededFromOtherAccount = amount + updatedSavingsBalance
    amendSavingsAccount((updatedSavingsBalance)*-1)
    amendCheckingAccount((amountNeededFromOtherAccount))
}