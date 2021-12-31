console.log(`Geometry Function Lab

Part 1, Rectangle`)
// Given a rectangle object like the one below, write the following functions:

// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle

// In other words, these functions should take as their only argument a single object with the same keys 
// (length, width) as the rectangle object above, and use that object to make the calculations.

const rectangle = {
  length: 6,
  width: 19,
  isSquare: function () {
      if (this.length === this.width) {
          console.log(`This is a square.`)
          return true
      } else {
          console.log(`This is not a square.`)
          return false
      }
  },
  area: function () {
      return this.length * this.width
  },
  perimeter: function () {
      return this.length + this.length + this.width + this.width
  }
};

console.log(rectangle.isSquare());
console.log(rectangle.area());
console.log(rectangle.perimeter());

console.log(`

Part 2, Triangle`)
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not

// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, 
// and which you will use for your calcuations.

const triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4,
  isEquilateral: function () {
    if ((this.sideA === this.sideB) && (this.sideB === this.sideC)) {
        console.log(`Triangle is equilateral.`);
        return true;
    } else {
        console.log(`This triangle is not equilateral.`);
        return false;
    }
  },
  isIsosceles: function () {
        if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
            console.log(`Triangle is an isosceles.`)
            return true;
        } else {
            console.log(`Triangle is not an isosceles.`)
            return false;
        }
    },
    areaTriangle: function () {
        const p = (this.sideA + this.sideB + this.sideC) / 2;
        console.log((Math.sqrt(p * (p - this.sideA - this.sideB - this.sideC))))
    }
};

console.log(triangle.isEquilateral())
console.log(triangle.isIsosceles())

// js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). 
// The function should return the total price of the shopping cart. Example

// Input

// // Output
// cashRegister(cartForParty); // 60.55

console.log(`

Part 3, The Cash Register`)

const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const calculateTotalCost = () => {
        let totalCost = 0;
    for (let i = 0; i < Object.keys(cartForParty).length; i++) {
        totalCost += (Number(Object.values(cartForParty)[i]));
        } console.log(`The total cart value is $${totalCost}`)
    }
calculateTotalCost()

console.log(`

Part 4, The Bank`)

// BANK HOMEWORK

let account1index = undefined;
let account2index = undefined;
let withdrawSuccess = 0;
let depositSuccess = 0;

// beginning of bank property
const bank = {

    // list of existing accounts
    account: [
        {accountNumber: 1, accountOwner:'Daniel Doyle', accountBalance: 4000},
        {accountNumber: 2, accountOwner:'Luke Doyle', accountBalance: 3000},
        {accountNumber: 3, accountOwner:'Jordan Doyle', accountBalance: 2000},
        {accountNumber: 4, accountOwner:'Dominic Doyle', accountBalance: 1000},
    ],

    // FUNCTION THAT RETURNS THE TOTAL $ IN THE BANK
    totalInBank: function () {
        let total = 0;
        for (i=0; i<bank.account.length; i++) {
            total += bank.account[i].accountBalance;
        } return `TLDB Update SMS: PRIVATE! DO NOT SHARE. The total amount in the bank is: $${total}`
    },

    // FUNCTION THAT CREATES ACCOUNT
    addAccount: function (name, balance) {
        this.account.push({"accountOwner" : name, "accountBalance" : balance})
        return `TLDB Update SMS: ${name}: Your new balance is: $${balance}`
    },

    // FUNCTION THAT ALLOWS
    depositToAccount: function (name, amount) {
        
        // JUST A TRACKING NUMBER TO SEE IF WE FIND ACCOUNT
        let foundAccount = 0;
        
        // SIMPLY CHECK HERE IF THEY ARE TRYING TO WITHDRAW USING THIS METHOD AND TELLS THEM YEAH NAH
        if (amount <= 0) {
            return 'Yeah nah mate. Cannot withdraw using deposit function.'
        }

        // ASSESS TO SEE IF WE HAVE AN ACCOUNT MATCHING THAT NAME
        for (i=0; i<bank.account.length; i++) {

            // IF WE DO FIND SOMEONE WITH THAT NAME, POP THE AMOUNT IN TO THEIR BANK
            if (bank.account[i].accountOwner === (`${name}`)) {
                foundAccount += 1;
                bank.account[i].accountBalance += amount;
                depositSuccess += 1;
            }

            // USING THE LOCAL VARIABLE OF foundAccount SEE'S IF WE ACTUALLY DEPOSITED AND LET THE CUSTOMER KNOW RESULT
        } if (foundAccount > 0) {
            return `TLDB Update SMS: We succesfully deposited ${amount} in to your account, ${name}.`
        } else {
            return `TLDB Update SMS: No account holder with that name.`
        }
    },

    // METHOD FUNCTION TO WITHDRAW FROM ACCOUNT
    withdrawFromAccount: function (name, amount) {

        // AGAIN USING THE SAME LOCAL VARIABLE TO SEE IF WE HAVE FOUND THEM
        let accountFound = 0;

        // LOOP THROUGH BANK ACCOUNTS
        for (i=0; i<bank.account.length; i++) {

            // CHECK IF THERE IS ENOUGH CASH IN THE BANK
            if (bank.account[i].accountOwner === (`${name}`)) {

                // IF THERE ISN'T ENOUGH, LET THEM KNOW
                if (Number(bank.account[i].accountBalance) - amount <= -0.1) {
                    accountFound += 1;
                    return `Not enough cash in the bank.`

                // IF THERE IS ENOUGH, COMPLETE WITHDRAWAL AND LET CUSTOMER KNOW
                } else if (Number(bank.account[i].accountBalance) - amount >= -0.1) {
                    bank.account[i].accountBalance -= amount;
                    accountFound += 1;
                    withdrawSuccess += 1;
                    return `Withdraw success. You withdrew ${amount} and your new balance ${bank.account[i].accountBalance}`
                }
            }
                
        }   // IF THE ACCOUNT DOESN'T EXIST, IT TELLS THE CUSTOMER TO BE MORE SPECIFIC
            console.log(`${accountFound} accounts found with that name. Try a more specific name.`)
    },

    // THIS IS JUST A FUNCTION TO FIND THE INDEX OF THE ACCOUNT ITSELF
    findIndexOfAccounts: function (account1, account2, amount) {
        for (i=0; i<bank.account.length; i++) {
            if (bank.account[i].accountNumber === account1)
            account1index = i;
            for (i=0; i<bank.account.length; i++) {
                if (bank.account[i].accountNumber === account2)
            account2index = i;
            }
        }
    },

    // USING THE DEPOSIT AND WITHDRAW FUNCTIONS I TRANSFERRED BETWEEN ACCOUNTS
    transferBetweenAccounts: function (account1, account2, amount) {
        this.findIndexOfAccounts(account1, account2);
        let previousWithdrawSuccessFigure = withdrawSuccess;
        this.withdrawFromAccount(`${bank.account[account1index].accountOwner}`,amount);
        if (withdrawSuccess > previousWithdrawSuccessFigure) {
            let previousDepositSuccessFigure = depositSuccess;
            this.depositToAccount(`${bank.account[account2index].accountOwner}`,amount);
            if (depositSuccess > previousDepositSuccessFigure) {
                console.log(`Congrats. Both withdrawal and deposit successful. ${bank.account[account1index].accountOwner} transferred $${amount} to ${bank.account[account2index].accountOwner}.`)
            }
        } else {
            console.log(`Issue with transfer. ${bank.account[account1index].accountOwner} does not have enough in their account for this transaction.`)
        }
    }
}

// My Banking Story

console.log(`There is only one bank remaining in the world. After the 14th Covid crisis, ending with the Armageddon variant, there was only one country remaining - Australia.`)
console.log(`With mankind struggling to survive, one lowly citizen arose as a banking magnate: Daniel Lord-Doyle.`);
console.log(`With his trusty mobile phone on hand, he accessed his private bank that was used by most remaining humans.`);
console.log(`In to his phone, Daniel typed in to his personal coding app: // bank.totalInBank() // which shows him the total amount stored in the bank.`);
console.log(`Let's see what comes up on his phone:`);
console.log(`%c${bank.totalInBank()}`, "background-color: green; color: white")
console.log(`"That simply won't do! I need more. I know, let's get Rowena an account! She helped me so much in my early days.`);
console.log(`In to his trusty device he typed // bank.addAccount('Rowena', 20000) // `);
console.log(`What's going to appear on his phone?`);
console.log(`%c${bank.addAccount('Rowena',20000)}`, "background-color: green; color: white")
console.log(`"My my... she deserves much more than that! Let's give ol' Ro Ro much more.`)
console.log(`Smiling, he taps in a very large number in to his banking app // bank.depositToAccount // function. What is going to happen!!`);
console.log(`%c${bank.depositToAccount('Rowena',200000)}`, "background-color: green; color: white")
console.log(`He recoils when he realises what he's done! OMG! That's way too much. Better take some out.`);
console.log(`He quickly types something in to his // Bank.withdrawFromAccount // function on his trusty app!`);
console.log(`%c${bank.withdrawFromAccount('Rowena',180000)}`, "background-color: green; color: white")
console.log(`He can't stop worrying yet. "Better check her balance", he says to himself. He taps away again.`);
console.log(`%cRowena's Balance: ${bank.account[4].accountBalance}`, "background-color: green; color: white");
console.log(`He wipes his brow, and breathes heavily. "That was close! She'll only spend it all on big, lovely books anyway."`);
console.log(`Dan turns his phone off and carries on with his day, trying to squeeze all of the dollars out of the remaining humans.`);

// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called 
// validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

console.log(`

Part 4, Card Validator`)

// detailing the variables required

