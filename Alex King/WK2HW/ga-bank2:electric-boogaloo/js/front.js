console.log('atm')




//if I want a global variable that uses this just set the perameter of the function to this. ie function(thisPlaceholder)... then call the function but with "this" as the perameter 


$("input[value='Deposit']").on('click', function () {
    let amtInput = parseFloat(
        $(this).siblings(
            "input[placeholder ='enter an amount']" //checking amount instead?? 
        ).val()
    )
    console.log(this)
    if (isNaN(amtInput)) {
        playError2()
    } else if ($(this).attr("id") === "checking-deposit") {
        checkingTotal += amtInput;
        console.log(this)
        $(this).siblings('.balance').html(`$${checkingTotal}`)
    } else {
        savingsTotal += amtInput
        $(this).siblings('.balance').html(`$${savingsTotal}`)
        // $(this).siblings("input[placeholder ='enter an amount']")
    }
    $(this).siblings("input[placeholder ='enter an amount']").val(''); // clears input
});

$("input[value='Withdraw']").on('click', function () {
    let userInput = $(this).siblings("input[placeholder ='enter an amount']").val();
    let amtInput = parseFloat(userInput)
    let yourCash = checkingTotal + savingsTotal

    // if (userInput === "/clr") {
    //     $(this).siblings('.balance').html(`$${0}`)
    // }

    if (isNaN(amtInput) && !(userInput === "/clr")) {
        playError2();
    } else {
        if ($(this).attr("id") === "checking-withdraw") {
            if (amtInput <= checkingTotal) {
                checkingTotal -= amtInput;
                $(this).siblings('.balance').html(`$${checkingTotal}`)
            } 
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
            if (yourCash < amtInput) {
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


function allowDrop(ev) { //I want change css of target 
    ev.preventDefault();
};
function transfer (ev) {
    ev.preventDefault();
};
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

function drop(ev) {// this is really ugly, you can cut out a lot!
    ev.preventDefault();
    // var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
    if (ev.target.id === "savings-balance"){
        (console.log('to savings from checking'))
        $(ev.target).parents('section')

        if (checkingTotal>0){
            userInput = prompt("Transfer amount:", "enter an amount");
            let transferAmt = parseFloat(userInput)
            if (isNaN(transferAmt)) {
                playError2()
                
            }
            else if (transferAmt <= checkingTotal){
                // console.log(transferAmt)
                checkingTotal -= transferAmt;
                savingsTotal += transferAmt;
                $("#checking-balance").html(`$${checkingTotal}`)
                $("#savings-balance").html(`$${savingsTotal}`)


            } else {
                playError();
                //error message
                console.log($(ev.currentTarget).parent(''))
                $("#checking-balance").addClass('shakebox'); //trigger animation
                $("#checking-balance").css('background-color', '#a94442');
                $("#checking-balance").on("animationend", function () { // reset animation for next time
                    $(this).removeClass('shakebox');
                    $("#checking-balance").css('background-color', '#E3E3E3')
                }); // end animation
            }
        }
        else {
            playError();
                //error message
                console.log($(ev.currentTarget).parent(''))
                $("#checking-balance").addClass('shakebox'); //trigger animation
                $("#checking-balance").css('background-color', '#a94442');
                $("#checking-balance").on("animationend", function () { // reset animation for next time
                    $(this).removeClass('shakebox');
                    $("#checking-balance").css('background-color', '#E3E3E3')
                }); // end animation
        }
    } else{
        // console.log('to checking from savings')
        $(ev.target).parents('section')

        if (savingsTotal>0){
            userInput = prompt("Transfer amount:", "enter an amount");
            let transferAmt = parseFloat(userInput)
            if (isNaN(transferAmt)) {
                playError2()
            } 
            else if (transferAmt <= savingsTotal){
                // console.log(transferAmt)
                savingsTotal -= transferAmt;
                checkingTotal += transferAmt;
                $("#checking-balance").html(`$${checkingTotal}`)
                $("#savings-balance").html(`$${savingsTotal}`)


            } else {
                playError();
                //error message
                console.log($(ev.currentTarget).parent(''))
                $("#savings-balance").addClass('shakebox'); //trigger animation
                $("#savings-balance").css('background-color', '#a94442');
                $("#savings-balance").on("animationend", function () { // reset animation for next time
                    $(this).removeClass('shakebox');
                    $("#savings-balance").css('background-color', '#E3E3E3')
                }); // end animation
            }
        }
        else {
            playError();
                //error message
                console.log($(ev.currentTarget).parent(''))
                $("#savings-balance").addClass('shakebox'); //trigger animation
                $("#savings-balance").css('background-color', '#a94442');
                $("#savings-balance").on("animationend", function () { // reset animation for next time
                    $(this).removeClass('shakebox');
                    $("#savings-balance").css('background-color', '#E3E3E3')
                }); // end animation
        }
    }
    console.log(ev.target)
    // console.log(data)
}
//TO DO:

// put everything into a function to call. you can cut at least 80+ lines!!!

// you can add drag and drop permissions to html!!!!








