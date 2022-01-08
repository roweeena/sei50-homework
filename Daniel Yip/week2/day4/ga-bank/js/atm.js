// console.log('atm js loaded', $);

// DOCUMENT READY
$(function(){
    
    // HANDLES THE CLICK ON THE ATM INTERACTION BUTTONS
    const clickHandler = function(event){

        /*
        - This function uses the click event data to generate the values for transactionType and account type.
        - The name variable is hardcoded in this version. Future versions would allow for multipe bank customers.
        - There is also a check to make sure the amount value is a positive number before calling the updatePage function.
        - The argument to the updatePage function is a transactionRequest function call to the bank
        */

        // create an array using the data in the button id
        const btnId = event.originalEvent.target.id.split('-');
      
        const transactionType = btnId[1];
        const name = 'dan';
        const account = btnId[0];
        const amount = parseFloat($(`#${account}-amount`).val()); // return the value from the text input and turn it to a float.
        
        
        if (Math.sign(amount) === 1){

            updatePage(bank.transactionRequest(transactionType, name, account, amount));

        }else {

            console.log($(`#${account}-amount`).val(), ' is not a valid input');

        }
            
    }
    
    //  UPDATE THE ATM PAGE 
    const updatePage = function(returnArray){ 
        /*
        This function expects an array containing 2 values as an argument.
            [0] contains the checking account balance
            [1] contains the savings account balance
        */

        // Set the account balances
        $('#checking-balance').html(`$${returnArray[0]}`); 
        $('#savings-balance').html(`$${returnArray[1]}`); 

        // Check if balace is 0 or not and remove or add the 'zero' class from the account div
        returnArray[0] ? $('#checking').removeClass('zero') : $('#checking').addClass('zero')
        returnArray[1] ? $('#savings').removeClass('zero') : $('#savings').addClass('zero')
       
    }

    // LISTENING FOR THE BUTTON CLICKS
    $('#checking-deposit').on('click', clickHandler);
    $('#checking-withdraw').on('click', clickHandler);
    $('#savings-deposit').on('click', clickHandler);
    $('#savings-withdraw').on('click', clickHandler);

    // SET THE INITAL PAGE ON LOAD
    updatePage(bank.transactionRequest('balanceCheck', 'dan'))

});
