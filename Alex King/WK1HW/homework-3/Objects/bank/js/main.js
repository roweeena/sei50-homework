console.log(`Welcome to the one and only bank
_._._                       _._._
_|   |_                     _|   |_
| ... |_._._._._._._._._._._| ... |
| ||| |  o NATIONAL BANK o  | ||| |
| """ |  """    """    """  | """ |
())  |[-|-]| [-|-]  [-|-]  [-|-] |[-|-]|  ())
(())) |     |---------------------|     | (()))
(())())| """ |  """    """    """  | """ |(())())
(()))()|[-|-]|  :::   .-"-.   :::  |[-|-]|(()))()
()))(()|     | |~|~|  |_|_|  |~|~| |     |()))(()
||  |_____|_|_|_|__|_|_|__|_|_|_|_____|  ||
~ ~^^ @@@@@@@@@@@@@@/=======\@@@@@@@@@@@@@@ ^^~ ~
^~^~                                ~^~^`)



// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 

const bank = {
    accounts:[
    {name:"Alex King", accountNumber:1, accountValue:4, password:"cal1c0"}, 
    {name:"blank name", accountNumber:2, accountValue:10, password:"abc123"},
    {name:"blank name", accountNumber:3, accountValue:3, password:"abc123"},
    {name:"blank name", accountNumber:4, accountValue:2, password:"abc123"},
    ],

    newAcc: function(name, accVal){
        let passGen = (Math.random() + 1).toString(36).substring(7); //stole this from stack...
        let newAccNum = bank.accounts.length+1
        bank.accounts.push({name: name, accountNum: newAccNum, accountVal: accVal, password:`${passGen}`});
        console.log(`new account added! ${name} has joined the bank`);
    },
    // newAcc() to start function 
  
    depositAmt: function(accNum, amt){
        const accNumCut = accNum-1
        let bankAcc = bank.accounts;
        bank.accounts[accNumCut].accountValue += amt
        console.log(`You have successfully deposited $${amt} into your account. Your current balance is ${bankAcc[accNumCut].accountValue}`)
    },
    // depositAmt(); to start function 
    
    withdrawAmt: function(accNum, amt){
        const accNumCut = accNum-1
        let bankAcc = bank.accounts;
        bankAcc[accNumCut].accountValue -= amt;
        if (bankAcc[accNumCut].accountValue < amt ){
            bankAcc[accNumCut].accountValue += amt;
            console.log(`Sorry, insufficient funds... You have ${bankAcc[accNumCut].accountValue} remaining`);
        } else {
        console.log(`You have successfully withdrawn $${amt} into your account. Your current balance is ${bankAcc[accNumCut].accountValue}`)}
    },
    // withdrawAmt();
    // let all = bank[numCut].accountValue;
    // let max = all; 
    // let everything = max; 
    transferAmt: function(accNum, secondAcc, amt){
        let numCut = accNum-1;
        let secondAccCut = secondAcc-1;
        let bankAcc = bank.accounts;
        bankAcc[numCut].accountValue -= amt;
        bankAcc[secondAccCut].accountValue += amt;
        if (bankAcc[numCut].accountValue<amt){
            bankAcc[numCut].accountValue+=amt;
            console.log(`Sorry, insufficient funds... You have ${bankAcc[numCut].accountValue}`);
         } else {console.log(`Transfer successful! You current account balance is ${bankAcc[numCut].accountValue}`)
        }
        
        // if (numCut == undefined){
        //     console.log('invalid account')
        // }
    },
    // transferAmt(1,2,100);
    myAcc: function(accNum){
        const numCut = accNum - 1;
        let bankAcc = bank.accounts;
        console.log(`Welcome ${bankAcc[numCut].name}, please enter your password`);
    },
    myPass: function(accNum){
        const numCut = accNum - 1;
        let bankAcc = bank.accounts;
        console.log(`Welcome ${bankAcc[numCut].name}, your password is ${bankAcc[numCut].password}`)

    },
    accVer: function(accNum, accPass){
        const numCut = accNum - 1;
        let bankAcc = bank.accounts;
        if (accPass != bankAcc.password){
            console.log(`Account Verified: Welcome ${bankAcc[numCut].name}`)
        } else{
            console.log(`wrong pass, try again`)
        }
        
    },
    myBalance: function(accNum) {
        const numCut = accNum - 1;
        let bankAcc = bank.accounts;
        console.log(`You current balance is $${bankAcc[numCut].accountValue}`);
    },
    bankValue: function(){
        // loop through acc value. then total = total + i 
    },
}


//if entered amt is > the last acc num 

// console.log(bank[0].name);


// const array =[];
// for(let i = 0; i < theOnlyBank.length; i++){
//     // bankBalance+=bank[i].accountValue+();
//     let outputNumber = 0;
//     outputNumber +=(i*theOnlyBank.length);
//     array.push(outputNumber);
//     console.log(array)
// }
// var array = [];
// for (i = 1; i <= 3; i++) {
//     var x = 0;
//     x += (i *3); 
//     array.push(x);
// }


// myBalance()
// myBalance()

// make acc num automatic 
// make it able to find acc num w name ... maybe password? ? ? ? 

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
// const regExp = /[a-zA-Z]/g;

// const validateCreditCard = function(cardNumber){
//     let cutNumber = cardNumber.replaceAll("-","")
//     let sameChar = false;
//     let includesLetter = false;
//     let evenLast = false;
//     let repeatingNo = cutNumber.charAt(1);
//     for (let i=0; i < cutNumber.length; i++){
//         if (repeatingNo !== cutNumber[i]){
//             sameChar = true;
//         }
//     }
//     if(regExp.test(cutNumber)){
//         console.log('Only numbers allowed!')
//         includesLetter = true
//     }
//     if(cardNumber[cardNumber.length - 1] % 2 !== 0){
//         console.log('invalid, last number must be even');
//         evenLast = true;
//       } 
//     if (!sameChar && cutNumber.length===16){
//         console.log('invalid, card cannot have all the same digits');
  
//     }
//     if (!evenLast && !sameChar && !includesLetter && cutNumber.length===16){
//         console.log('Card Valid ')
//     } else if (!sameChar && !includesLetter && cutNumber.length!==16){
//         console.log('error, not enough digits');
//     }
// }
// validateCreditCard("1111-1111-1111-1111")



// function validateCreditCard(cardNumber){
//     if(cardNumber.length !== 16){
//       return false;
//     }
  

//     for(let i = 0; i < cardNumber.length; i++){
//       const currentNumber = cardNumber[i];
  
//       if(!Number.isInteger(currentNumber)){
//         return false;
//       }
//     }
//     var obj = {};
//     for(var i = 0; i < cardNumber.length; i++){
//       obj[cardNumber[i]] = true;
//     }
//     if(Object.keys(obj).length < 2){
//       return false;
//     }
//     if(cardNumber[cardNumber.length - 1] % 2 !== 0){
//       return false;
//     }
//     let total = 0;
//     for(var i = 0; i < cardNumber.length; i++){
//       total += Number(cardNumber[i]);
//     }
//     if(total <= 16){
//       return false;
//     }
  
//     return true;
//   };

  
// validateCreditCard();
//do a bunch of if statements ... 

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.








// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.