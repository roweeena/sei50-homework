//Initialisation and declaration. 
let checkingBalance=$("#checking-balance");
let savingsBalance=$("#savings-balance");
let checkingAmount=$("#checking-amount");
let savingsAmount=$("#savings-amount");
let totalCheckingBalance=0;
let totalSavingsBalance=0;
//set a foratter to format the $x.xx
const formatter = new Intl.NumberFormat
('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

//The following code allows to deposit into the checking account. 
$("#checking-deposit").click(function(){
    //check if it's a number
    if(isNaN(checkingAmount.val())){
        alert("Please enter a number.");
        return checkingAmount.val();
    }else{
        //check if the number is valid, has to be >0.01&<50000
        if (checkingAmount.val()<0.01||checkingAmount.val()>50000) {
            alert("You can only deposit between $0.01 and $50,000.")
            return checkingAmount.val();
        } else {
            totalCheckingBalance+=Number(checkingAmount.val());

            checkingBalance.text(formatter.format(totalCheckingBalance));
        }
    }
})
$("#savings-deposit").click(function(){
    if(isNaN(savingsAmount.val())){
        alert("Please enter a number.");
        return savingsAmount.val()='';
    }else{
        if (savingsAmount.val()<0.01||savingsAmount.val()>50000) {
            alert("You can only deposit between $0.01 and $50,000.")
            return savingsAmount.val();
        } else {
            totalSavingsBalance+=Number(savingsAmount.val());

            savingsBalance.text(formatter.format(totalSavingsBalance));
        }
    }
})
//withdraw
$("#checking-withdraw").click(function(){
    if(isNaN(checkingAmount.val())){
        alert("Please enter a number.");
        return checkingAmount.val();
    }else{
        if(checkingAmount.val()>totalCheckingBalance){
            //borrow money from another account  
            let remaining=Number(checkingAmount.val())-totalCheckingBalance;
            totalCheckingBalance=0;     
            totalSavingsBalance-=remaining;
            checkingBalance.text(formatter.format(totalCheckingBalance));
            savingsBalance.text(formatter.format(totalSavingsBalance)); 
            if(totalSavingsBalance<0){
                alert("Your balance cannot drop below $0");
            }
                // ??? How do I prevent the account balance is negative when the alert shows? 
        }
        else{
            totalCheckingBalance-=Number(checkingAmount.val());
            checkingBalance.text(formatter.format(totalCheckingBalance));
        }
    }
    //change colour
    if(checkingBalance.text()==="$0.00"){
        checkingBalance.css("background-color","red");
    };  
    if(savingsBalance.text()==="$0.00"){
        savingsBalance.css("background-color","red");
    }; 
});


$("#savings-withdraw").click(function(){
    if(isNaN(savingsAmount.val())){
        alert("Please enter a number.");
        return savingsAmount.val();
    }else{
        if(savingsAmount.val()>totalSavingsBalance){  
            let remaining=Number(savingsAmount.val())-totalSavingsBalance;
            totalSavingsBalance=0;     
            totalCheckingBalance-=remaining;
            savingsBalance.text(formatter.format(totalSavingsBalance));
            checkingBalance.text(formatter.format(totalCheckingBalance));
            if(totalCheckingBalance<0){
                alert("Your balance cannot drop below $0");
            }
            // ??? How do I prevent the account balance is negative when the alert shows? 
        }
        else{
            totalSavingsBalance-=Number(savingsAmount.val());
            savingsBalance.text(formatter.format(totalSavingsBalance));
        }
    }
    if(checkingBalance.text()==="$0.00"){
        checkingBalance.css("background-color","red");
    };  
    if(savingsBalance.text()==="$0.00"){
        savingsBalance.css("background-color","red");
    };  
})
