$(function() {

  // update balances UI to display to a user.
  const updateBalances = function() {
    // get the current balances from businessLogic.js
    const checkingBalances = yourAccounts.checking;
    const savingsBalances = yourAccounts.savings;

    // update text
    $("#checking-balance").html(`$${checkingBalances}`);
    $("#savings-balance").html(`$${savingsBalances}`);

    // if the balance is 0, change background color to red
    if(checkingBalances === 0) {
      $("#checking-balance").css("background", "red");
    }else {
      $("#checking-balance").css("background", "#E3E3E3");
    }

    if(savingsBalances === 0) {
      $("#savings-balance").css("background", "red");
    }else {
      $("#savings-balance").css("background", "#E3E3E3");
    }
  }


  // validate input value before executing the function in the businessLogic.
  // (this part maybe should be in the business logic?)
  const checkInput = function(value) {
    const amount = parseFloat(value);


    // // !!!!! Why is "NaN === NaN" return false? !!!!!
    // console.log(`
    //   amount: ${amount}
    //   NaN: ${NaN}
    //   amount === NaN: ${amount === NaN}
    // `);


    // check if the input is a Number
    if(amount.toString() === "NaN") {
      console.log(`ERROR: please enter a number`);
      return false;
    }

    // check if the amount is positive value
    if(amount < 0) {
      console.log(`ERROR: please enter a positive number`);
      return false;
    }

    // return the amount if it is the proper value
    return amount;
  }


  // change balances when a user clicks the buttons
  const clickDepositOrWithdraw = function(account, action) {

    // if the account is savings, get the savings element. if not, the checking element.
    let $inputVal = account === "savings" ? 
      $("#savings-amount").val() : $("#checking-amount").val();


    // change the input value to a Number type and check if it is the proper value.
    const amount = checkInput($inputVal);

    // if the input is not valid, do an early return.
    if(!amount) {
      return null;
    }

    // use the functions in businessLogic.js to calculate the balances
    action === "Deposit" ? deposit(account, amount) : withdraw(account, amount);

    // and update the balance on screen so a user can see it
    updateBalances();
  }


  // click events in savings
  $("#savings input[type='button']").on("click", function() {
    // this.value will be "Deposit" or "Withdraw".
    clickDepositOrWithdraw("savings", this.value);

    // and initialise input value.
    $("#savings-amount").val("");
  });

  // click events in checking
  $("#checking input[type='button']").on("click", function() {
    clickDepositOrWithdraw("checking", this.value);

    $("#checking-amount").val("")
  });


  // set initial balances
  updateBalances();
});