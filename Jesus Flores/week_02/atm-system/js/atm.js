$(function(){
    //Dom Elements
    const dom = {
        $findAccount: $("#findAccount"),
        $costumerNumber: $("#idAccount"),
        $content: $("#content"),
        $atmLogin: $("#ga-atm"),
        $atmPanel: $(".atm-panel"),
        $alert: $(".alert"),
        $transaction: $(".deposit, .withdraw"),
        $transfer: $(".transfer"),
        $checkingBalance:$("#checking-balance"),
        $savingsBalance:$("#savings-balance"),

    }

const events = {
        //Find account of costumer by ID
        session: {},
        findAccount: function(){
            dom.$findAccount.on("click",function(){
                const costumer = dbBank.findAccount(parseInt(dom.$costumerNumber.val()));
                if(costumer.data){
                    events.session["id"] = costumer.id;
                    events.session["data"] = costumer.data;
                    dom.$atmLogin.toggle(); 
                    dom.$checkingBalance.text(`$${costumer.data.accounts.checking}`);
                    dom.$savingsBalance.text(`$${costumer.data.accounts.savings}`);
                    dom.$atmPanel.fadeToggle(1000);
                    return;
                }
                return events.showMessage("Invalid Account", "error");
            })
        }, 
     
        transfer: function(){
            $(dom.$transfer).on("click",function(){
                const amount = $(this).prevAll().eq(2).val();
                if (amount <= 0 || !isNaN(amount) === false ) return events.showMessage("Wrong Amount","error", "bottom");
                const accFrom = $(this).attr("accType");
                const depositAcc =  accFrom === "savings" ? "checking" : "savings";
                const costumerNumber = events.session["data"].costumerNumber;
                const transfer =  dbBank.transferMoney(costumerNumber, amount, depositAcc, accFrom);
                if(transfer.error === false) {
                    const data  = transfer.data.accounts;
                    events.updateBalances(data[depositAcc], depositAcc);
                    events.updateBalances(data[accFrom], accFrom);
                    return events.showMessage(`${transfer.message}`, "success", "bottom");
                    
                }
                return events.showMessage(transfer.message,"error", "bottom");
            })
        },

        transaction: function(){
            $(dom.$transaction).on("click",function(){
             const amount = $(this).prevAll().eq(1).val() || $(this).prevAll().eq(0).val();
             if (amount <= 0 || !isNaN(amount) === false ) return events.showMessage("Wrong Amount","error", "bottom");
             const accType = $(this).attr("accType");
             if($(this).hasClass("withdraw")){
                return events.requestTransaction(amount, accType, "withdraw");
             }
             return events.requestTransaction(amount, accType, "deposit");
            })
        },

        requestTransaction: function(amount, accType, typeOp){
            const costumerNumber = events.session["data"].costumerNumber
            const response =  typeOp === "withdraw" ? dbBank.withdrawMoney(costumerNumber, amount, accType) : dbBank.depositMoney(costumerNumber, amount, accType, );
            if(response.error === false){
                events.updateBalances(response.data, accType);
                return  events.showMessage(`${response.message}`, "success", "bottom")
            }
            return events.showMessage(`${response.message}`, "error", "bottom")
        },

        updateBalances : function(amount, acctype) {
            if(amount === 0) {
                $(`#${acctype}-balance`).addClass("broke");
            }else{
                $(`#${acctype}-balance`).removeClass("broke");
            }
            return $(`#${acctype}-balance`).text(`$${amount}`);
        },
        showMessage: function(message, status, bottom = "") {
        const div = $(`<div class="alert alert-${status} ${bottom}">${message}</div>`);
        if($(".alert").length > 0){
            $(".alert").remove();
        }
        dom.$content.append(div);
        $('.alert').fadeToggle(4000);
        },

    }

events.findAccount();  
events.transfer();
events.transaction();
})