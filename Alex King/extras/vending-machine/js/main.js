// Your task is to create a function that simulates a vending machine.

// Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

// The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

// The return value is an object with 2 properties:

//     product: the product name that the user selected.
//     change: an array of coins (can be empty, must be sorted in descending order).

// Examples

// vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

// vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

// vendingMachine(products, 90, 1) ➞ "Not enough money for this product"

// Notes

//     The products are fixed and you can find them in the Tests tab.
//     If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
//     If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
//     If there's no change, return an empty array as the change.

// START TIME 5:45 pm 

// END TIME 6:10 pm 



const vendingMachine = {
    Items:[
    {Name: "milk", Price:260, Stock: 7, code:001},
    {Name: "diet milk", Price: 285, Stock: 10, code:936},
    {Name: "almond milk", Price: 350, Stock:12, code:676},
    {Name: "fermented milk", Price: 150, Stock:3, code:396},
    {Name: "table tennis table", Price: 20, Stock: 1, code: 112},
    {Name: "pilk", Price: 130, Stock: 15, code:423},

    ],
    buyItem: function(code, money){
    for (let i=0; i<vendingMachine.Items.length; i++){
        if (vendingMachine.Items[i].code===code && vendingMachine.Items[i].Stock>0){
            console.log(`${vendingMachine.Items[i].Name} is ${vendingMachine.Items[i].Price}`)
            if (vendingMachine.Items[i].Price===money && vendingMachine.Items[i].Stock>0){
                console.log(`No change required, have a nice day!`);
                console.log((vendingMachine.Items[i].Stock = vendingMachine.Items[i].Stock - 1));
            } else if (vendingMachine.Items[i].Price>money && vendingMachine.Items[i].Stock>0){
                console.log(`Incorrect amount. Remaining balance ${vendingMachine.Items[i].Price-=money}`);
            } else if (vendingMachine.Items[i].Price<money && vendingMachine.Items[i].Stock>0){
                console.log(`Please take your change! ${money-vendingMachine.Items[i].Price}`)
                (vendingMachine.Items[i].Stock = vendingMachine.Items[i].Stock - 1);
            } 
            if (vendingMachine.Items[i].Stock<=0){
                console.log(`Sorry, out of stock`)
            }
        } //else {
            //console.log(`${code} doesn't correspond to any item`);
        //}

    }
        
        
    
    }, // closing buyItem

    stockCheck: function(code){
        for (let i=0; i<vendingMachine.Items.length; i++){
            if(vendingMachine.Items[i].code === code){
                console.log(`${vendingMachine.Items[i].Name} has ${vendingMachine.Items[i].Stock} remaining`)
                break;
            } 
            
        }
    } // closing stock check
    
}


// gotta give change 
// If I had more time... function in function allowing you to pay the remaining change.
    // Change the price to the new price given the money presented 