let savingsBalance = 0;
let checkingBalance = 0;

const checkBalance = function(){
    if(savingsBalance === 0 ){
        $("#savings-balance").addClass("zero");   
    }
    if(savingsBalance > 0){
        $("#savings-balance").removeClass("zero");   
    }
    if(checkingBalance === 0){
        $("#checking-balance").addClass("zero");   
    }
    if(checkingBalance > 0){
        $("#checking-balance").removeClass("zero");   

    }
}

const addMoney = function( depositAmount, accountId){
    
    if(depositAmount.match(/^[-0-9.]/)){
        if(accountId === "savings-deposit"){
            savingsBalance += parseFloat(depositAmount);
            $("#savings-balance").html("$" + savingsBalance.toFixed(2));
            checkBalance();
        }
        else {
            checkingBalance += parseFloat(depositAmount);
            $("#checking-balance").html("$" + checkingBalance.toFixed(2));
            checkBalance();
        }
    }
    else{
    console.log("enter a valid amount"); 
    }
};



const withdrawMoney = function( withdrawAmount, accountId){
    
    const withdrawSavings = parseFloat(withdrawAmount);
    const withdrawChecking = parseFloat(withdrawAmount);
    
    if(withdrawAmount.match(/^[-0-9.]/)){
        if(accountId === "savings-withdraw"){
            if(savingsBalance - withdrawSavings >= 0){
                console.log(withdrawAmount);
                console.log(savingsBalance);
                savingsBalance -= withdrawSavings;
                $("#savings-balance").html("$" + savingsBalance.toFixed(2));
            }
            else {
                if(savingsBalance + checkingBalance - withdrawSavings >= 0) {
                    let overdraw = savingsBalance - withdrawSavings;
                    savingsBalance = 0;
                    checkingBalance += overdraw;
                    $("#savings-balance").html("$" + savingsBalance);
                    $("#checking-balance").html("$" + checkingBalance);
                }
                else {
                    console.log("Balance too low in both accounts to withdraw that much");    
                }
            checkBalance();
        }
        } // end savings withdraw if
        
        else {
            if(checkingBalance - withdrawChecking >= 0){
                checkingBalance -= withdrawChecking;
                $("#checking-balance").html("$" + checkingBalance.toFixed(2));
            }
            else {
                if(savingsBalance + checkingBalance - withdrawChecking >= 0){
                    let overdraw = checkingBalance - withdrawChecking;
                    checkingBalance = 0;
                    savingsBalance += overdraw;
                    $("#checking-balance").html("$" + checkingBalance);
                    $("#savings-balance").html("$" + savingsBalance);
                    
                }
                else {
                    console.log("Balance too low in both accounts to withdraw that much"); 
                } 
            checkBalance();  
            }
        } // end checking withdraw
    } //end outer if
}; //end withdrawMoney()

// const widthdrawCheckingMoney = function(currentSavings, withdrawAmount){
//     const withdrawChecking = parseFloat(withdrawAmount);
//     if(checkingBalance - withdrawChecking >= 0){
//         checkingBalance -= withdrawChecking;
//         $("#checking-balance").html("$" + checkingBalance.toFixed(2));
//     }
//     else {
//         if(savingsBalance + checkingBalance - withdrawChecking >= 0 ){
//             let overdraw = checkingBalance - withdrawChecking;
//             checkingBalance = 0;
//             savingsBalance += overdraw;
//             $("#checking-balance").html("$" + checkingBalance);
//             $("#savings-balance").html("$" + savingsBalance);

//         }
//         else {
//             console.log("Balance too low in both accounts to withdraw that much"); 

//         }
//     }
//     checkBalance();

// };

// const addSavingsMoney = function(depositAmount){
//     const depositedSavings= parseFloat(depositAmount);
//     savingsBalance += depositedSavings;
//     $("#savings-balance").html("$" + savingsBalance.toFixed(2));
//     checkBalance();

// };

// const addCheckingMoney = function(depositAmount){
//     const depositedChecking = parseFloat(depositAmount);
//     checkingBalance += depositedChecking;
//     $("#checking-balance").html("$" + checkingBalance.toFixed(2));
//     checkBalance();

// };
