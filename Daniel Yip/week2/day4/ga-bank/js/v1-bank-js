// console.log('bank js loaded');

const savings = {
    balance: 0,
}
const checking = {
    balance: 0,
}

//  WITHDRAW SAVINGS
const withdrawSavings = function(amount){
    if (savings.balance >= amount){

        console.log(`process withdrawl`);
        
        savings.balance -= amount;

        return [checking.balance, savings.balance]

    } else if ( savings.balance + checking.balance >= amount){

        console.log(`process overdraw`);

        let withdrawlAmount = amount;

        withdrawlAmount -= savings.balance;
        
        savings.balance = 0;
        
        checking.balance -= withdrawlAmount;

        console.log(savings, checking);

        return [checking.balance, savings.balance]
        
    } else {
        console.log(`insufficient funds`);
        return [checking.balance, savings.balance]
    }
}

// WITHDRAW CHECKING
const withdrawChecking = function(amount){
    if (checking.balance >= amount){

        console.log(`process withdrawl`);

        checking.balance -= amount;

        console.log(checking);

        return [checking.balance, savings.balance]

    } else if ( checking.balance + savings.balance >= amount){

        console.log(`process overdraw`);

        let withdrawlAmount = amount;

        withdrawlAmount -= checking .balance;
        
        checking.balance = 0;
        
        savings.balance -= withdrawlAmount;

        console.log(checking, savings);

        return [checking.balance, savings.balance]
        
    } else {
        console.log(`insufficient funds`);
        return [checking.balance, savings.balance]
    }
}

// DEPOSIT
const deposit = function(account, amount){
    account.balance += amount

    console.log(account);

    return [checking.balance, savings.balance]
}
