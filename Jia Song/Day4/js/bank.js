// JavaScript Bank ---------------------------------------------------------------------------------------
const bank = {
  accounts: [
    {
      owner: "jia",
      balance: 100,
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
      console.log("You can't create an account with no money!");
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
  findTheAccount: function(owner) {
    // iterate this.accounts 
    for(let i=0; i<this.accounts.length; i++) {
      // if owner name is found, return the index number
      if(this.accounts[i].owner === owner) {
        return i;
      }
    }

    // if nothing is returned from for-loop, failed to find a owner
    console.log(`We couldn't find any account with name ${owner}`);
    // return false so other methods can check if the account is found or not
    return false;
  },

  getBalance: function(owner) {
    // find the account's index with owner's name
    const index = this.findTheAccount(owner);

    // if the account is found, return it's balance
    if(index !== false) {
      console.log(`${owner}'s balance: ${this.accounts[index].balance}`);
      return this.accounts[index].balance;
    }
  },

  deposit: function(owner, amount) {
    // find the account's index with owner's name
    const index = this.findTheAccount(owner);

    if(index !== false) {
      // add amount
      this.accounts[index].balance += amount;

      console.log(`
        ${owner} deposited $${amount} 
        Balance: $${this.accounts[index].balance}
      `);

      return this.accounts[index].balance;
    }
  },

  withdraw: function(owner, amount) {
    const index = this.findTheAccount(owner);

    if(index !== false) {
      let someonesBalance = this.accounts[index].balance;

      // if owner doesn't have enough balance, return false and exit
      if(someonesBalance - amount < 0) {
        console.log(
          `%c ERROR: ${owner} can't withdraw $${amount}. ${owner}'s balance is $${someonesBalance}!`,
          `color: red;`
        );

        return false;
      }else {
        // if they have enough, subtract balance
        this.accounts[index].balance = this.accounts[index].balance - amount;
  
        // !!! why doesn't it work !!! it gives me ...
        // someonesBalance -= amount; 
  
        console.log(`
          ${owner} withdrew $${amount}
          Balance: $${this.accounts[index].balance}
        `);
      }
  
      return someonesBalance;
    }
  },

  transfer: function(from, to, amount) {
    let withdrawn = this.withdraw(from, amount);

    if(withdrawn !== false) {
      this.deposit(to, withdrawn);
      console.log(`%c${from} transferred $${amount} to ${to} successfully!`, `color: blue`)
    }
  }
};

bank.getTotalSum();
bank.deposit("jia", 1000000)
bank.addAccount("nick", 1000);
bank.deposit("nick", 200);
bank.withdraw("nick", 300);
bank.withdraw("jia", 50);
bank.transfer("mona", "jia", 10000);
bank.transfer("jia", "joelle", 30000);




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
  for(let i=0; i<creditNumArr.length; i++) {
    // ...
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
}

// console.log(validateCreditCard('9999-9b99-8888-00a0'));
// console.log(validateCreditCard('9999-9899-8888-0001'));
// console.log(validateCreditCard('1111-1111-1211-0002'));
