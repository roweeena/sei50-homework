// cartForParty follows the item: price schema
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
const cashRegister = (cart) => {
    let total = 0;
    
    for (key in cart) {
        total += parseFloat(cart[key]);
    }

    return total;
}
  // Output
console.log(cashRegister(cartForParty)); // 60.55