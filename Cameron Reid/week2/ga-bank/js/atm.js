
// jQuery dom manipulating
$(function(){
    checkBalance();
    checkBalance();

    const $savingsButtons = $("#savings :input[type='button']");
    const $checkingButtons = $("#checking :input[type='button']");
    const $savingsInput = $("#savings-amount");
    const $checkingInput = $("#checking-amount");

    // ______________ SAVINGS FUNCTION____________________-
    $savingsButtons.on("click", function(event){
        const buttonClicked = event.target.id;
        let $enteredAmount = $("#savings-amount").val();
        if($enteredAmount != ""){
            if($(this).attr("id") === "savings-deposit"){
                addMoney($enteredAmount, buttonClicked);
                // addSavingsMoney($enteredAmount);
                $savingsInput.val("")
                }
                else {
                withdrawMoney($enteredAmount, buttonClicked)
                $savingsInput.val("")
                }
        }
        else {
            console.log("Enter valid amount");
        }
    })

    // ______________ CHECKING FUNCTION_____________________-
    $checkingButtons.on("click", function(event){
        const buttonClicked = event.target.id;
        let $enteredAmount = $("#checking-amount").val();
        if($enteredAmount != ""){
            if($(this).attr("id") === "checking-deposit"){
                addMoney( $enteredAmount, buttonClicked);
                $checkingInput.val("")
            }
            else {
                withdrawMoney( $enteredAmount, buttonClicked)
                console.log("clicked");
                $checkingInput.val("")
                }
        } 
        else {
            console.log("Enter valid amount");
        }   
        
    })

    // ______________ OLD CHECKING FUNCTIONS_____________________-

    // $("#checking-deposit").on("click", function(event){
    //     const buttonClicked = event.target.id;
    //     let $enteredAmount = $("#checking-amount").val();
    //     if($(this).attr("id") === "checking-deposit"){
    //     addMoney($checkingAmount, $enteredAmount, buttonClicked);
    //     }
    // })

    // $("#checking-withdraw").on("click", function(){
    //     const $enteredAmount = $("#checking-amount").val();
    //     widthdrawCheckingMoney($checkingAmount, $enteredAmount, buttonClicked)
    // });

})

// ______________ OLD SAVINGS FUNCTIONS_____________________-

    // $("#savings :input").on("click", function(){
    //     let $enteredAmount = $("#savings-amount").val();
    //     if($(this).attr("id") === "savings-deposit" && $(this).attr("id") !== "savings-amount"){
    //     addSavingsMoney($savingsAmount, $enteredAmount);
    //     }
    //     else if($(this).attr("id") === "savings-withdraw" && $(this).attr("id") !== "savings-amount"){
    //     widthdrawSavingsMoney($savingsAmount, $enteredAmount)

    //     }
    // })
    // $("input").on("click", function(event){
    //         if($(this).parent().attr("id") === "savings"){
    //             if($(this).attr("id") === "savings-deposit"){
    //                 addSavingsMoney($savingsAmount, $enteredAmount);
    //             } 
    //             else if($(this).attr("id") === "savings-withdraw"){
    //                 widthdrawSavingsMoney($savingsAmount, $enteredAmount)
    //             }
    //         }        
    // })

    // $("#savings-deposit").on("click", function(){
    //     let $enteredAmount = $("#savings-amount").val();
    //     addSavingsMoney($savingsAmount, $enteredAmount);
        
    // })

    // $("#savings-withdraw").on("click", function(){
    //     let $enteredAmount = $("#savings-amount").val();
    //     widthdrawSavingsMoney($savingsAmount, $enteredAmount)
    // });




