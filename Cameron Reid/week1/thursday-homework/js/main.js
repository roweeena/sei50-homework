// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

// js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty); // 60.55
// js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

const bank = {
    accounts: [
        {name: "Cam", balance: 100},
        {name: "Dhuks", balance: 3200},
        {name: "Jason", balance: 10050},
        {name: "Grace", balance: 348},
        {name: "Parents", balance: 345100},
    ],
    totalInBank: function(){
        let total = 0; //create a variable called total
        for(let i = 0; i < this.accounts.length; i ++){ //for loop that counts up until the length of the array
            const money = this.accounts[i]; //sets the variable money to "bank.accounts[i}"
            total = total + parseInt(money.balance); // adds to the total by taking the balance from bank.accounts[0].balance and turns the string that is returned into a number so it can be added.
        }
        return `There is $${total} total in the bank.`; // returns the total once the for loop has finished
    },
    addAccount: function(name, amount){ //pass in the new name and amount for the new account
        this.accounts.push({"name" : name, "balance" : amount}) // pushes a new object into the accounts array with the new name and balance
    },
    deposit: function(accountOwner, amount){
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].name === accountOwner){
                this.accounts[i].balance + amount;
                return `We succesfully deposited $${amount} in to your account, ${accountOwner}.`
            }
            else {
                this.accounts[i].balance += amount;
                return `No account holder with that name.`
            }
        }
    },
    withdraw: function(accountOwner, amount){
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].name === accountOwner){
                if((this.accounts[i].balance - amount) < 0){
                    return `Unable to withdraw that amount, Balance too low. Current balance: $${this.accounts[i].balance}`
                }
                
                else {
                    this.accounts[i].balance -= amount
                    return `We've succesfully withdrawn $${amount} from your account, ${accountOwner}.`
                }
                
            }
            else return `No account holder with that name.`
        }
    },
    transfer: function(toAccount, amount, fromAccount){
        let foundToAccount = ""; // what do i initalize this variable with
        let foundFromAccount = ""; // what do i initalize this variable with
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].name === toAccount){ // check if the account name is in the array               \
                foundToAccount = this.accounts[i]; // asign the account name to the foundToAccount const         |
            }                                            //                                                      | its not dry dont judge me 
            if(this.accounts[i].name === fromAccount){ // check if the account name is in the array              |
                foundFromAccount = this.accounts[i]; // asign the account name to the foundToAccount const      /
            }
            
        } // end of for loop

        if((foundFromAccount.balance - amount) < 0){ // 
            return `Unable to transfer $${amount} as you don't have enough funds. Your're current balance is: $${foundFromAccount.balance}. `
        }
        else if (foundFromAccount === "" || foundToAccount === ""){ //check if either of the vars are empty
            return `One or more of the account names are wrong`
        } 
        else {
            // console.log(foundFromAccount);
            // console.log(foundToAccount);
            foundFromAccount.balance -= amount; // takes amount from the from account
            foundToAccount.balance += amount; // adds the amount to the to account
            return `We have transferred $${amount} from ${foundFromAccount.name} to ${foundToAccount.name}. `
        }
    } // end of key value pair
} //end of object

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration