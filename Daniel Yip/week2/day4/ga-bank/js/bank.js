// console.log('bank js loaded');

// SECRET BANK STUFF
const bank = {

    customers: {
    /*
    This customers object isn't actually requried for this version, it could be replaced by the checking and savings as discrete key value pairs in the bank object. In the next version I would like to build in multiple users maybe with pin numbers to access the accounts from the atm page.
    */

        dan: {checking: 1000, savings: 1000,},
    },

    // TRANSACTIONS OBJECT CONTAINS METHODS FOR EACH TRANSACTION
    transactions: {
        deposit: function(name, accountType, depositAmount){

            const customer = bank.customers[name]; // for readability
            
            customer[accountType] += depositAmount; // add the deposit amount to the current balance
    
            return this.balanceCheck(customer) // run a balance check and return the results
        },
    
        withdraw: function(name, account, withdrawlAmount){
            
            const customer = bank.customers[name]
    
            if (customer[account] >= withdrawlAmount){ // if there is enough in the requested account
             
                customer[account] -= withdrawlAmount // deduct the amount from the current balance
                
                console.log(`withdrawl processed`);
                return this.balanceCheck(customer) // run a balance check and return the results
    
            } else if (customer.savings + customer.checking >= withdrawlAmount){ // if there is enough in both accounts combined
    
                let transactionAmount = withdrawlAmount; // set a variable to track the overdraw process
                const otherAccount = account === 'checking' ? 'savings' : 'checking'; // set the otherAccount 
                      
                transactionAmount -= customer[account]; // deduct the amount in the requested account from the transaction
                customer[account] = 0; // set the requested account to 0
                customer[otherAccount] -= transactionAmount; // deduct the remaining amount from the otherAccount
                
                console.log(`overdraft processed`);
                return this.balanceCheck(customer) // run a balance check and return the results
    
            } else {
                console.log(`insufficient funds`);
                return this.balanceCheck(customer) // run a balance check and return the results
            }
        },

        balanceCheck: function(customer){
            // return an array with the customers account balances. 
            // the returned values for display are rounded to 2 decimal places. Account values are not altered.           
            return [Math.round(customer.checking * 100) / 100, Math.round(customer.savings * 100) / 100]
        }
    },
    
    // METHOD THAT atm.js USES TO INTERACT WITH THE BANK
    transactionRequest: function(transactionType, name, accountType, amount){

        //DATA VALIDATION

        if (transactionType === 'balanceCheck' &&   // check for balance check and
            name in this.customers){                // and if the name has an account

                return this.transactions.balanceCheck(bank.customers[name]); // run a balanceCheck

        } else if (
            transactionType in this.transactions && // check that the requested transaction is possible at this bank
            name in this.customers &&   // check the user is a customer at this bank
            accountType in this.customers[name] && // check the selected user has an account of the type requested
            !isNaN(amount)){    // check the amount is a number

                return this.transactions[transactionType](name, accountType, amount); // run the transaction and return the result

        };

        console.log(`invalid request`);
    }
}
