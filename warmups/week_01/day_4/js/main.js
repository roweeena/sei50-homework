// //console.log("You're doing great sweetie");
//
// # Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.


const simonSays = function(message) {
  //If you ask a Simon a question, he answers "Sure"
  //if (message[message.length - 1] ==="?"){
  if (message.endsWith('?')){
    return "Sure"
    //He answers 'Fine be that way" if you don't say anything
  } else if (message === ""){
    return "Fine, be that way"
    //if you yell at him, he answers "Whoah chill out"
  } else if (message ===  message.toUpperCase()){
    return "Whoah, chill out!"
  } else {
      //"Whatever" to anything else
    return "Whatever"
  }
} // end of function

console.log(simonSays("Is the weather nice today?"));
console.log(simonSays("The weather nice today!"));
console.log("INPUT AS SEVERAL SPACES", simonSays("   "));
console.log(simonSays("HEYYY"));
console.log(simonSays("WHY ARE YOU DOING THIS TO ME????"));
