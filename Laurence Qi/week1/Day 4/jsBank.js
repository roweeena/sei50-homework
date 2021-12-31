//TODO: bank should have the addAccount, these accounts should have current balance, name, deposit(), withdraw();
const bank = {
    accounts: [],
    addAccount: function(newBalance, newName) {
        this.accounts.push({
            balance: newBalance,
            name: newName,
            withdraw: function(amount) {
                this.balance -= amount;
            },
            deposit: function(amount) {
                this.balance += amount;
            },
        });
    }
}

bank.addAccount(100, "Laurence");
console.log(bank.accounts);

bank.accounts[0].withdraw(50);

console.log(bank.accounts[0].balance)
