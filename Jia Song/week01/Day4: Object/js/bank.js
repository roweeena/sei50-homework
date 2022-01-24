// JavaScript Bank ---------------------------------------------------------------------------------------
const bank = {
  accounts: [
    {
      owner: "jia",
      balance: 0,
    },
    {
      owner: "jenna",
      balance: 200,
    },
    {
      owner: "mona",
      balance: 300,
    },
    {
      owner: "joelle",
      balance: 400,
    },
  ],

  getTotalSum: function() {
    let total = 0;

    // iterate all accounts and sum it's balances
    for(let i=0; i<this.accounts.length; i++) {
      total += this.accounts[i].balance;
    }

    console.log(`Total sum: $${total}`)
    return total;
  },

  addAccount: function(owner, amount) {
    // check if amount is minus
    if(amount < 0) {
      console.log(`%cERROR: You can't create an account with no money, ${owner}!`, "color: red");
      // exit from method
      return null;
    }

    // check if the user enter account's name
    if(!owner.length) {
      console.log("Enter owner's name.");
      return null;
    }

    // create account object
    const newAccount = {
      owner: owner,
      balance: amount
    };

    // push the account to this.account
    this.accounts.push(newAccount);

    console.log(`
      ${owner} just created new account!
      Balance: $${amount}
    `)
  },

  // method to find the user's account based on name (for DRY code)
  findAccount: function(owner) {
    // iterate this.accounts 
    for(let i=0; i<this.accounts.length; i++) {
      // if owner name is found, return the index number
      if(this.accounts[i].owner === owner) {
        return this.accounts[i];
      }
    }

    // if nothing is returned from for-loop, failed to find a owner
    console.log(`We couldn't find any account with name ${owner}`);
    // return false so other methods can check if the account is found or not
    return false;
  },

  getBalance: function(owner) {
    // find the account's index with owner's name
    const account = this.findAccount(owner);

    // if the account is not found, early return
    if(index === false) {
      return null;
    }

    console.log(`${owner}'s balance: ${account.balance}`);
    return account.balance;
  },

  deposit: function(owner, amount) {
    // find the account's index with owner's name
    const account = this.findAccount(owner);

    if(account === false) {
      return null;
    }

    // add amount
    account.balance += amount;

    console.log(`
      ${owner} deposited $${amount} 
      Balance: $${account.balance}
    `);

    return account.balance;
  },

  withdraw: function(owner, amount) {
    const account = this.findAccount(owner);

    if(account === false) {
      return false;
    }

    let someonesBalance = account.balance;

    // if owner doesn't have enough balance, return false and exit
    if(someonesBalance - amount < 0) {
      console.log(
        `%c ERROR: ${owner} can't withdraw $${amount}. ${owner}'s balance is $${someonesBalance}!`,
        `color: red;`
      );

      return false;
    }else {
      // if they have enough, subtract balance
      account.balance -= amount;

      // !!! why doesn't it work !!! doesn't change the value
      // someonesBalance -= amount; 

      console.log(`
        ${owner} withdrew $${amount}
        Balance: $${account.balance}
      `);
    }

    return someonesBalance;
  },

  transfer: function(from, to, amount) {
    let withdrawn = this.withdraw(from, amount);

    if(withdrawn !== false) {
      this.deposit(to, withdrawn);
      console.log(`%c${from} transferred $${amount} to ${to} successfully!`, `color: blue`)
    }
  }
};

// bank.getTotalSum();
// bank.deposit("jia", 1000000);
// bank.addAccount("nick", 1000);
// bank.deposit("nick", 200);
// bank.withdraw("nick", 300);
// bank.addAccount("mimi", -100);
// bank.withdraw("jia", 50);
// bank.transfer("mona", "jia", 10000);
// bank.transfer("jia", "joelle", 30000);




// Credit Card Validation --------------------------------------------------------------------------------------
const validateCreditCard = function(input) {
  const removeDash = input.replace(/\-/g,'');
  const creditNumArr = removeDash.split("");

  console.log(`Your credit card number: ${input}`);


  // condition1: Number must be 16 digits, all of them must be numbers
  if(creditNumArr.length !== 16) {
    console.log("%c ERROR: You should enter 16 digits number", "color: red");
    return false;
  }


  // condition2: You must have at least two different digits represented (all of the digits cannot be the same)
  let firstDigit = creditNumArr[0];
  let isDifferent = false;

  for(let i=0; i<creditNumArr.length; i++) {
    if(firstDigit !== creditNumArr[i]) {
      isDifferent = true;
      // break;
    }
  }

  if(isDifferent === false) {
    console.log("%c ERROR: You must have at least two different digits", "color: red");
    return false;
  }


  // condition3: The final digit must be even
  let finalDigit = creditNumArr[creditNumArr.length-1];

  if(finalDigit % 2 !== 0) {
    console.log("%c ERROR: The final digit must be even", "color: red");
    return false;
  }


  // condition4: The sum of all the digits must be greater than 16
  let sum = 0;

  for(let i=0; i<creditNumArr.length; i++) {
    sum += parseInt(creditNumArr[i]);

    if(sum > 16) {
      break;
    }
  }

  if(sum <= 16) {
    console.log("%c ERROR: The sum of all the digits must be greater than 16", "color: red")
    return false;
  }

  console.log("%c SUCCESS: Credit card is created successfully!", "color: blue");
  return true;
}

validateCreditCard('9999-9b99-8888-00a0');
validateCreditCard('9999-9899-8888-0001');
validateCreditCard('1111-1111-1211-0002');
validateCreditCard('1111-1111-1111-1111');
