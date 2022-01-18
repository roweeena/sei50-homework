// object to track of the checking and savings balances
const yourAccounts = {
  checking: 0,
  savings: 0,
}

// when a user click the "deposit" button, this function will execute.
const deposit = function(account, amount) {
  // add money to the account
  yourAccounts[account] += amount;

  console.log(`SUCCESS: deposit $${amount} to ${account}`);
}


const tryOverdraft = function(account, amount) {
  const totalBalances = yourAccounts.checking + yourAccounts.savings;

  // if there isn't enough money, exit fom this function.
  if(totalBalances < amount) {
    console.log(`ERROR: Your total balance is less than $${amount}`);
    return null;
  }

  // calculate overdraft amount.
  const overdraftAmount = amount - yourAccounts[account];

  // change the account value to 0.
  yourAccounts[account] = 0;

  // withdraw the overdraft amount from the other account
  if(account === "checking") {
    yourAccounts.savings -= overdraftAmount;
  }else {
    yourAccounts.checking -= overdraftAmount;
  }

  console.log(`SUCCESS: withdraw $${amount} from ${account}, and overdraft $${overdraftAmount} from other account`);
}


// when a user click the "withdraw" button, this function will execute.
const withdraw = function(account, amount) {
  if(yourAccounts[account] < amount) {
    // if there isn't enough money in the account, try overdraft.
    tryOverdraft(account, amount);
  }else {
    // if there is enough money in the account, withdraw "amount".
    yourAccounts[account] -= amount;

    console.log(`SUCCESS: withdraw $${amount} from ${account}`);
  }
}