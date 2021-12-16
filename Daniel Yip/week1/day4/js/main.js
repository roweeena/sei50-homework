
console.log(`Geometry Function Lab`)

// Given a rectangle object like the one below, write the following functions:
const rectangle = {
    length: 4,
    width: 4
};

// isSquare(rect) - Returns whether the rectangle is a square or not

const isSquare = function(rect){
    if (rect.length === rect.width){
        return true;
    } else{
        return false;
    }
}

console.log(`Square? ${isSquare(rectangle)}`)

// area(rect) - Returns the area of the rectangle

const area = function(rect){
    return rect.length * rect.width
}

console.log(`area is ${area(rectangle)}`)

// perimeter(rect) - Returns the perimeter of the rectangle

const perimeter = function(rect){
    return rect.length * 2 + rect.width *2
}

console.log(`perimeter is ${perimeter(rectangle)}`)

// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.


// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:

const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
}
const triangle1 = {
    sideA: 4,
    sideB: 4,
    sideC: 4
}

// isEquilateral(tri) - Returns whether the triangle is equilateral or not

// function to compare all values in an object
const objectValuesSame = function(obj){
    const objectArray = Object.values(obj);
    const result = objectArray.every(index => index === objectArray[0]);
    return result
}

// const isEquilateral = function(tri){
const isEquilateral = function(tri){
    return objectValuesSame(tri);
}
console.log(`Equilateral? ${isEquilateral(triangle)}`)

// isIsosceles(tri) - Returns whether the triangle is isosceles or not
const isIsosoles = function(tri){
    if (tri.sideA === tri.sideB && tri.sideA != tri.sideC || tri.sideB === tri.sideC && tri.sideB != tri.sideA || tri.sideC === tri.sideA && tri.sideC != tri.sideB ){
        return true
    } else{
        return false;
    }
}
console.log(`Isosoles? ${isIsosoles(triangle)}`)

// area(tri) - Returns the area of the Triangle
const triArea = function(tri){
    const halfPerimeter = (tri.sideA + tri.sideB + tri.sideC) / 2;
    const result = Math.sqrt(halfPerimeter * ((halfPerimeter - tri.sideA) * (halfPerimeter - tri.sideB) * (halfPerimeter - tri.sideC)));
    return result.toFixed(2)
}
console.log(`area: ${triArea(triangle)}`)


// isObtuse(tri) - Returns whether the triangle is obtuse or not

const isObtuse = function(tri){
    const a = Math.pow(tri.sideA, 2)
    const b = Math.pow(tri.sideB, 2)
    const c = Math.pow(tri.sideC, 2)
    if (a > (b+c)|| b > (a+c) || c > (a+b)){
        return true;
    } else{
        return false
    }
}
console.log(`Obtuse? ${isObtuse(triangle)}`)

// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

console.log(`###################`)
console.log(`The Cash Register`)

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

const cartForParty = {  
      banana: "1.25",
      handkerchief: ".99",
      Tshirt: "25.01",
      apple: "0.60",
      nalgene: "10.34",
      proteinShake: "22.36"
};

const cashRegister = function (cart){
    const arrayValues = Object.values(cart); //convert object values to an array
    let total = 0;

    for (let i=0; i < arrayValues.length; i++){ //loop the array
        total = total + Number(arrayValues[i]) //convert each array item to a number and add it to the total
    }
    return total;
}
console.log(cashRegister(cartForParty))

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// #### There is only one bank. This bank is an object, which contains an array of accounts. 
// #### The bank needs a method that will return the total sum of money in the accounts. 
// #### It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. 
// #### There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
//  ####Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// ####There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

console.log(`######################`)
console.log('%c___________________Welcome to the Bank!_________________',
'color: yellow; font-size: 16pt');

console.log('%cbank.accountsTotal()','color: red; font-size: 14pt' )
console.log('%cbank.addAccount()','color: red; font-size: 14pt')
console.log('%cbank.findAccount()','color: red; font-size: 14pt')
console.log('%cbank.deposit()','color: red; font-size: 14pt')
console.log('%cbank.withdraw()','color: red; font-size: 14pt')
console.log('%cbank.transfer()','color: red; font-size: 14pt')
console.log('%cbank.dodgyTransfer()','color: red; font-size: 14pt')

const bank = {
    accounts: [
        {accountName: 'Alex King', currentBalance: 1000},
        {accountName: 'Alex Zhang', currentBalance: 1001},
        {accountName: 'Angela Zhang', currentBalance: 1002},
        {accountName: 'Cameron Reid', currentBalance: 1003},
        {accountName: 'Cassie Lee', currentBalance: 1004},
        {accountName: 'Daniel Lord-Doyle', currentBalance: 1005},
        {accountName: 'Daniel Yip', currentBalance: 1006},
        {accountName: 'David Broomhead', currentBalance: 1007},
        {accountName: 'Ethan Zheng', currentBalance: 1008},
        {accountName: 'Frankie Tsoi', currentBalance: 1009},
        {accountName: 'Jesus Flores', currentBalance: 1010},
        {accountName: 'Jia Song', currentBalance: 1011},
        {accountName: 'Laurence Qi', currentBalance: 1012},
        {accountName: 'Stanley Chin', currentBalance: 1013},
        {accountName: 'Steven Furnari', currentBalance: 1014},
        {accountName: 'Suraj Sharma', currentBalance: 1015},
        {accountName: 'Luke Hammer', currentBalance: 1016},
        {accountName: 'Rowena Leung', currentBalance: 1017},
    ],

    message: (string) => {
        console.log(string)
    },

    records: () => {
        const bankAccArray = bank.accounts
        for (let i = 0; i < bankAccArray.length; i++){
            console.log(`Account Name: ${bankAccArray[i].accountName}` + '\n' + `       Balance: $${bankAccArray[i].currentBalance}`)
        }
    },

    // RETURNS THE TOTAL FOR ALL ACCOUNTS
    accountsTotal: function(){
        let total = 0 //keeping track of the balance
        for (let i = 0; i < this.accounts.length; i++){ // looping through each accounts balance
            total = total + this.accounts[i].currentBalance; // adding the account balance to the total tally
        }
        bank.message(`The current total for all accounts is $${total}`);
        return total
    },

    // CREATES A NEW ACCOUNT
    addAccount: (name, startingBalance) => {
        newAccName = name.toString();
        bank.accounts.push({accountName: newAccName, currentBalance: startingBalance,})// push method to add an account to the array
        bank.message('Your account has been created');
        console.log(bank.findAccount(newAccName));
        
        
    },
    // CHECKS AN ACCOUNT NAME AND RETURNS THE ACCOUNT
    findAccount: (userInputAcc) => { 
        let accountNameCheck = bank.accounts.find(acc => { 
            if (acc.accountName === userInputAcc){//checks each element in the array for a match to the user input
                return true;
            }
        })
        return accountNameCheck
    },

    // DEPOSITS INTO AN ACCOUNT
    deposit: (account, amount) => {
        const depositAccount = bank.findAccount(account);
        if (amount <= 0){ //if you try to deposit nothing or less then nothing you'll be rejected
            bank.message('You must deposit a positive amount!'); 
        } else if (depositAccount === undefined){ // if there is no account by that name it will create one
            bank.addAccount(account, amount)
        } else{
            depositAccount.currentBalance = depositAccount.currentBalance + amount; // deposit the ammount into the appropriate account
            console.log('Deposit Sucessful', depositAccount)
        };
    },

    withdraw: (account, amount) => {
        const withdrawAccount = bank.findAccount(account);
        if (withdrawAccount === undefined){ // check  for the account
            bank.message(`There is no Account by that name`)
        } else if (amount <= 0){ // check for an amount
            bank.message('You must enter an amount!');
        }else if(amount > withdrawAccount.currentBalance){ // stop accounts going below zero
            console.log('Insufficient Funds', withdrawAccount)
        } else{
            withdrawAccount.currentBalance = withdrawAccount.currentBalance - amount; // withdraw the funds
            console.log('Withdrawal Sucessful', withdrawAccount)
        };
    },

    transfer: (withdrawAcc, amount, depositAcc ) => {
        const withdrawAccount = bank.findAccount(withdrawAcc);

        if (withdrawAccount === undefined){ // check  for the account
            bank.message(`There is no Account by with the name ${withdrawAcc}`)
            return
        }; 
        
        if (amount <= 0){ // check for an amount
            bank.message('You must enter an amount!');
            return
        };

        bank.withdraw(withdrawAcc, amount);
        bank.deposit(depositAcc, amount);
    },

    dodgyTransfer: (withdrawAcc, amount, depositAcc ) => {
        bank.withdraw(withdrawAcc, amount);
        bank.deposit(depositAcc, amount)
    },

    
} //END bank


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
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.