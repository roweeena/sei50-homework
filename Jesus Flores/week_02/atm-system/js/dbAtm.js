const dbBank = {
    accounts: [
        {costumerNumber: 12345678, accFullName: "John Wick",accounts: {"savings":3442.23, "checking":3442.23}},
        {costumerNumber: 123456, accFullName: "Hans Landa",accounts: {"savings":34.30, "checking":2112.15}},
    ],
    //Despoit money to specific account
    transferMoney: function(accNumber, depositAmount, depositAcc, fromAcc){
        const index = this.findAccount(accNumber);
        if(index["id"] >= 0   ){
            const id = index["id"];
            const amount = Number(depositAmount);
            if(amount > this.accounts[id].accounts[fromAcc]) return {error: true, message: "You broke!"};
            const amountWithdrawn = (this.accounts[id].accounts[fromAcc] - amount);
            const amountDeposited = (this.accounts[id].accounts[depositAcc] + amount);
            this.accounts[id].accounts[fromAcc] = parseFloat(amountWithdrawn.toFixed(2));
            this.accounts[id].accounts[depositAcc] = parseFloat(amountDeposited.toFixed(2));
            return {error: false, message: "Transfer completed!", data:this.accounts[id]};;
             
        }
        return {error: true, message: "Costumer 404!"};
    },
    
    //Withdraw Money from bank account
    withdrawMoney: function(accNumber, withdrawAmount, accType){
        const result = this.findAccount(accNumber);
        if(result.id >= 0){
            const id = result.id;
            const currentAmount = this.accounts[id].accounts[accType];
            if ((currentAmount - withdrawAmount >= 0)){
                this.accounts[id].accounts[accType] = parseFloat((currentAmount - Number(withdrawAmount)).toFixed(2));
                return {error: false, message: "Withdrawn completed!", data:this.accounts[id].accounts[accType]};
            }
            return {error: true, message: "You broke!"};
        }
        return {error: true, message: "Costumer 404!"};
    },

    depositMoney: function(accNumber, withdrawAmount, accType){
        const result = this.findAccount(accNumber);
        if(result.id >= 0){
            const id = result.id;
            const currentAmount = this.accounts[id].accounts[accType];
            this.accounts[id].accounts[accType] = parseFloat((currentAmount + Number(withdrawAmount)).toFixed(2));
            return {error: false, message: "Deposit completed!", data:this.accounts[id].accounts[accType]};
            
        }
        return {error: true, message: "Costumer 404!"};
    },

    findAccount: function(costumer){
        let active = {}
        this.accounts.find((value, index) => {
            if(value.costumerNumber === costumer){
                active["id"] = index;
                active["data"] = value;
            }
        });
        return active;
    },
}