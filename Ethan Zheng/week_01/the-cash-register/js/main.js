console.log("The Cash Register Loaded");

//cashRegister - a function that takes a shopping cart object
//the object contains item names and prices (itemName: itemPrice). 
//The function should return the total price of the shopping cart.

const cashRegister = function (cart) {
    const prices = Object.values(cart);
    let receipt = 0;
    for (let i = 0; i < prices.length; i++) {
        receipt = receipt + Number(prices[i]);
    }
    return receipt;
}

