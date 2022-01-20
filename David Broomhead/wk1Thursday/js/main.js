console.log("Thursday Night Homework Loaded!");

console.log("Geometry Function Lab")

console.log("Part 1 - Square")

// Given a `rectangle` object like the one below, write the following functions:

// * isSquare(rect) - Returns whether the rectangle is a square or not
// * area(rect) - Returns the area of the rectangle
// * perimeter(rect) - Returns the perimeter of the rectangle

// javascript

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(shape){
    if(shape.width === shape.length){     // tests if the length is equal to  width
        return "it's a square"
    }else {
        return "not a square"        // if the sides are not equal, the shape cannot be a square
    }
}

console.log(isSquare(rectangle))

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

console.log("Part 2 - Triangle")


// Given a `triangle` object like the one below, write the following functions:

// * isEquilateral(tri) - Returns whether the triangle is equilateral or not
// * isIsosceles(tri) - Returns whether the triangle is isosceles or not
// * area(tri) - Returns the area of the Triangle
// * isObtuse(tri) - Returns whether the triangle is obtuse or not

const triangle = {
    sideA: 6,
    sideB: 5,
    sideC: 60
};

const isEquilateral = function(tri){
    if(tri.sideA === tri.sideB && tri.sideA === tri.sideC){
        return "this is an equilateral triangle"
    }else {
        return "this is not an equilateral triangle"
    }
}

const isIsosceles = function(tri){
    if(tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC){
        return "this is an isosceles triangle"
    }else {
        return "this is not an isosceles triangle"
    }
}

const triangleArea = function(tri){
    const a = tri.sideA
    const b = tri.sideB
    const c = tri.sideC
    const p = (a + b + c)/2
    const areaOfTriangleMath = Math.sqrt(p*((p - a)*(p - b)*(p - c)))
    return areaOfTriangleMath   // not completely sure the result is correct
}

const isObtuse = function(tri){
    const a = tri.sideA
    const b = tri.sideB
    const c = tri.sideC
    const longestSide = Math.max(a,b,c)    // Math object grabs largest number 
    if ((longestSide*longestSide) > ((a*a) + (b*b))){      //  wasn't able to work out how to simply isolate the two shorter sides
        return "the triangle is obtuse"
    }else {
        return "the triangle is not obtuse (probably acute or right)"
    }
}

console.log(isEquilateral(triangle))
console.log(isIsosceles(triangle))
console.log(triangleArea(triangle))
console.log(isObtuse(triangle))


// As above, these functions should take a single object as an argument, which will have the same keys as the `triangle` above, and which you will use for your calcuations.



// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// // Input

const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output
// cashRegister(cartForParty); // 60.55

console.log((Number(cartForParty["banana"])))

const cashRegister = function(cart){
    
    let totalPrice = 0;                                  // creates variable scoped for use within function
    
    for (const key in cart) {                           // for in loop to interate all items 
        totalPrice = totalPrice + Number(cart[key]);     // total cost is tallied each time loop iterates
    }
        return totalPrice                                // returns the variable for the price
}

console.log(cashRegister(cartForParty))



console.log("JavaScript Bank")

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank is an object, which contains an array of accounts.

const bank = [
    {Name: "Steven Smith", Balance: 100},
    {Name: "Shane Warne", Balance: 1000},
    {Name: "Adam Gilchrist", Balance: 300},
    {Name: "Nathan Lyon", Balance: 400}
]


const enquireBalance = function(customerName){       // function to return balance of a particular customer
    for (let i = 0; i < bank.length; i++) {
        if(customerName === bank[i].Name){
            return bank[i].Balance
        }
    }
}


const calculateBankTotalHoldings = function(){          // function to total sum of funds in accounts
    let totalHoldings = 0;
    for (let i = 0; i < bank.length; i++) {
        totalHoldings = totalHoldings + bank[i].Balance
    }
    return totalHoldings
}


const addAccount = function(newCustomerName,balance){    // function to add new customer
    const newAccountObj = {                  // empty object created in preparation of new customer details
        Name:"",
        Balance:0
    };                                       // I feel like there is a more efficient way of doing this
    newAccountObj.Name = newCustomerName;    // object details updated with name and balance
    newAccountObj.Balance = balance
    bank.push(newAccountObj);
    console.log("new customer added")
}

const depositFunds = function(customerName,depositAmount){
    for (let i = 0; i < bank.length; i++) {
        if(customerName === bank[i].Name){
            bank[i].Balance = bank[i].Balance + depositAmount;
        return bank[i].Balance
        }
    }
}

const withdrawFunds = function(customerName,withdrawalAmount){
    for (let i = 0; i < bank.length; i++) {
        if(customerName === bank[i].Name){
            bank[i].Balance = bank[i].Balance - withdrawalAmount;
        return bank[i].Balance
        }
    }
}

// list of customers at start of day
console.log(bank)                             

// enquiry made on Steven Smith's balance (result 100)
console.log(enquireBalance("Steven Smith"))     

// enquiry that calculates total sum of money in the accounts (result 1800)
console.log(calculateBankTotalHoldings())    

//  new customer Mark Waugh added
addAccount("Mark Waugh",800)                 

//  list of customers showing new customer Mark Waugh
console.log(bank)                            

// 1000 is deposited into Steven Smith's account
console.log(depositFunds("Steven Smith",1000))   

// 500 is withdrawn from Shane Warne's account
console.log(withdrawFunds("Shane Warne", 500))   

// list of bank customers at end of day
console.log(bank)                             





// The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 

// #### Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance. 

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working. 

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance. 

// ### Tips

// Don't overthink this. Shorter code is probably the answer. 

// ## Bonus

// - Ensure that the accounts cannot have negative values. 
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 

// ## Additional

// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them. 

// ---

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.