/* Simon Says
Create a function that takes an input and returns Simon's response as follows:
 Simon answers 'Sure.' if you ask him a question.
 He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
 He says 'Fine. Be that way!' if you address him without actually saying anything.
 He answers 'Whatever.' to anything else. */

 const simonSays = function(word){
    if(word === word.toUpperCase() ){
       return "Chill homie!";
    }
    if(word.includes("?")){
        return "Sure";
    }
    return "Fine, whatever";
 }

 console.log(simonSays("WTF DUDE!"));
 console.log(simonSays("do you know the way?"));
 console.log(simonSays("I know the way"));