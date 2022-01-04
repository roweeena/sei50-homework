// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.



const rect = {
    length: 4,
    width: 4

};

// isSquare(rect) - Returns whether the rectangle is a square or not
const isSquare = function(rect) {
    if (this.length === this.width){
        return "this is a square";
    }else{
        return "this is not a square";
    }
    
}

// area(rect) - Returns the area of the rectangle
const area = function(rect){
    return this.length * this.width;
}

// perimeter(rect) - Returns the perimeter of the rectangle
const perimeter = function (rect){
    return 2 * (this.length * this.width);
}

console.log(rect);
//wasn't sure how to print the result :(


    // Part 2, Triangle
    // Given a triangle object like the one below, write the following functions:
    
    // As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.


const tri = {
    sideA : 3,
    sideB : 4,
    sideC : 4, 

}
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
const isEquilateral = function (tri){
    if( this.sideA === this.sideB && this.sideB === this.siceC ){
        return 'They are equilateral!';
    }else{
        return 'They are not equilateral';

    }
}

// isI(tri) - Returns whether the triangle is isosceles or not
const isIsosceles = function (tri){
    if ( this.sideA !== this.sideB && this.sideB === this.sideC && this.sideA !== this.sideB ){
        return 'this is isosceles'
    }else{
        return 'this is not isosceles'
    }
}

 // area(tri) - Returns the area of the Triangle
const triArea = function (tri){
    return this.sideA * this.sideB * this.sideC
}

// isObtuse(tri) - Returns whether the triangle is obtuse or not


// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart){
    return this.banana * this.handkerchief * this.Tshirt * this.apple * this.nalgene * this.proteinShake;
}

// // Output

const cashRegistry = cart;
console.log(cashRegistry);

// cashRegister(cartForParty); // 60.55
// have a problem with printing the output..:(




    // JavaScript Bank
    // In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
    
    // Bank
    // There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
    
const bankAccounts = [
    





]

    // The bank has many accounts. Accounts should be objects that all share a set of common functionality.
    
    // Accounts
    // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
    
    // There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
    
    // You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
    
    