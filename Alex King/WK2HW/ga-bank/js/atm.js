// console.log('atm')

let checkingTotal = 0;
let savingsTotal = 0;

const playError = function () {
    $("div.error").fadeIn(300).delay(3000).fadeOut(400);
};
const playError2 = function () {
    $("div.secondError").fadeIn(300).delay(3000).fadeOut(400);
}
const withdrawConfirm = function () {
    confirm("Insufficient funds! Would you like to withdraw from your other account?")
}

//if I want a global variable that uses this just set the perameter of the function to this. ie function(thisPlaceholder)... then call the function but with "this" as the perameter 


$("input[value='Deposit']").on('click', function () {
    let amtInput = parseFloat(
        $(this).siblings(
            "input[placeholder ='enter an amount']" //checking amount instead?? 
        ).val()
    )

    if (isNaN(amtInput)) {
        playError2()
    } else if ($(this).attr("id") === "checking-deposit") {
        checkingTotal += amtInput;
        $(this).siblings('.balance').html(`$${checkingTotal}`)
    } else {
        savingsTotal += amtInput
        $(this).siblings('.balance').html(`$${savingsTotal}`)
        // $(this).siblings("input[placeholder ='enter an amount']")
    }
    $(this).siblings("input[placeholder ='enter an amount']").val('');
});

$("input[value='Withdraw']").on('click', function () {
    let userInput = $(this).siblings("input[placeholder ='enter an amount']").val();
    let amtInput = parseFloat(userInput)
    let yourCash = checkingTotal + savingsTotal
    
    if (userInput === "/clr") {
        $(this).siblings('.balance').html(`$${0}`)
    }

    if (isNaN(amtInput) && !(userInput === "/clr")) {
        playError2();
    } else {
        if ($(this).attr("id") === "checking-withdraw") {
            if (amtInput <= checkingTotal) {
                checkingTotal -= amtInput;
                $(this).siblings('.balance').html(`$${checkingTotal}`)
            } //overdraw goes here. 
            else if (yourCash >= amtInput) {
                if (confirm("Error: insufficient funds! Would you like to withdraw from your other account?") == true) {
                    fromSavings = checkingTotal -= amtInput -= savingsTotal;
                    savingsTotal = fromSavings
                    checkingTotal = 0;
                    $("#savings-balance").html(`$${savingsTotal}`)
                    $("#checking-balance").html(`$${checkingTotal}`)
                    console.log(yourCash - savingsTotal)
                }
                else {
                    playError();
                    //error message
                    $(this).parents('section').addClass('shakebox'); //trigger animation
                    $("#checking-balance").css('background-color', '#a94442');
                    $(this).parents('section').on("animationend", function () { // reset animation for next time
                        $(this).removeClass('shakebox');
                        $("#checking-balance").css('background-color', '#E3E3E3')
                    }); // end animation
                }
            }; //error1
            if (yourCash <= amtInput) {
                playError();
                //error message
                $(this).parents('section').addClass('shakebox'); //trigger animation
                $("#checking-balance").css('background-color', '#a94442');
                $(this).parents('section').on("animationend", function () { // reset animation for next time
                    $(this).removeClass('shakebox');
                    $("#checking-balance").css('background-color', '#E3E3E3')
                }); // end animation

            }
        }  //close checking-withdraw
        else if (amtInput <= savingsTotal) {
            savingsTotal -= amtInput;
            $(this).siblings('.balance').html(`$${savingsTotal}`)
        } else {
            playError();
            $(this).parents('section').addClass('shakebox') //trigger animation
            $("#savings-balance").css('background-color', '#a94442')

            $(this).parents('section').on("animationend", function () { //reset animation for next time
                $(this).removeClass('shakebox');
                $("#savings-balance").css('background-color', '#E3E3E3');
            }); //error1
        } //close savings-withdraw
        $(this).siblings("input[placeholder ='enter an amount']").val('');
    }//if NaN
});


//TO DO:
// separate visual from backend 
// ie update animations, html, colors, errors in one file and what triggers them in another
// Make drag and drop that allows transfer 







