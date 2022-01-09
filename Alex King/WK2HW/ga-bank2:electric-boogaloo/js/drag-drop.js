
// function allowDrop(ev) {
//     ev.preventDefault();
// };
// function transfer (ev) {
//     ev.preventDefault();
// };
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// };

// function drop(ev) {// this is really ugly, you can cut out a lot!
//     ev.preventDefault();
//     // var data = ev.dataTransfer.getData("text");
//     // ev.target.appendChild(document.getElementById(data));
//     if (ev.target.id === "savings-balance"){
//         (console.log('to savings from checking'))
//         $(ev.target).parents('section')

//         if (checkingTotal>0){
//             userInput = prompt("Transfer amount:", "enter an amount");
//             let transferAmt = parseFloat(userInput)
//             if (isNaN(transferAmt)) {
//                 playError2()
                
//             }
//             else if (transferAmt <= checkingTotal){
//                 // console.log(transferAmt)
//                 checkingTotal -= transferAmt;
//                 savingsTotal += transferAmt;
//                 $("#checking-balance").html(`$${checkingTotal}`)
//                 $("#savings-balance").html(`$${savingsTotal}`)


//             } else {
//                 playError();
//                 //error message
//                 console.log($(ev.currentTarget).parent(''))
//                 $("#checking-balance").addClass('shakebox'); //trigger animation
//                 $("#checking-balance").css('background-color', '#a94442');
//                 $("#checking-balance").on("animationend", function () { // reset animation for next time
//                     $(this).removeClass('shakebox');
//                     $("#checking-balance").css('background-color', '#E3E3E3')
//                 }); // end animation
//             }
//         }
//         else {
//             playError();
//                 //error message
//                 console.log($(ev.currentTarget).parent(''))
//                 $("#checking-balance").addClass('shakebox'); //trigger animation
//                 $("#checking-balance").css('background-color', '#a94442');
//                 $("#checking-balance").on("animationend", function () { // reset animation for next time
//                     $(this).removeClass('shakebox');
//                     $("#checking-balance").css('background-color', '#E3E3E3')
//                 }); // end animation
//         }
//     } else{
//         // console.log('to checking from savings')
//         $(ev.target).parents('section')

//         if (savingsTotal>0){
//             userInput = prompt("Transfer amount:", "enter an amount");
//             let transferAmt = parseFloat(userInput)
//             if (isNaN(transferAmt)) {
//                 playError2()
//             } 
//             else if (transferAmt <= savingsTotal){
//                 // console.log(transferAmt)
//                 savingsTotal -= transferAmt;
//                 checkingTotal += transferAmt;
//                 $("#checking-balance").html(`$${checkingTotal}`)
//                 $("#savings-balance").html(`$${savingsTotal}`)


//             } else {
//                 playError();
//                 //error message
//                 console.log($(ev.currentTarget).parent(''))
//                 $("#savings-balance").addClass('shakebox'); //trigger animation
//                 $("#savings-balance").css('background-color', '#a94442');
//                 $("#savings-balance").on("animationend", function () { // reset animation for next time
//                     $(this).removeClass('shakebox');
//                     $("#savings-balance").css('background-color', '#E3E3E3')
//                 }); // end animation
//             }
//         }
//         else {
//             playError();
//                 //error message
//                 console.log($(ev.currentTarget).parent(''))
//                 $("#savings-balance").addClass('shakebox'); //trigger animation
//                 $("#savings-balance").css('background-color', '#a94442');
//                 $("#savings-balance").on("animationend", function () { // reset animation for next time
//                     $(this).removeClass('shakebox');
//                     $("#savings-balance").css('background-color', '#E3E3E3')
//                 }); // end animation
//         }
//     }
//     console.log(ev.target)
//     // console.log(data)
// }