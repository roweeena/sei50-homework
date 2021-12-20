console.log(`Welcome to Simons Says!`)
// # Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.


const simonSays = function(inputSentence){
    if (inputSentence.includes('?')){ //inputSentence.endsWith('?') // if (inputSentence[inputsentence.length -1] ==="?")
        console.log(`Sure.`) // testing for question. 
    } 
    else if (inputSentence===""){
        console.log(`Fine. Be that way!`);
    }else if (inputSentence === inputSentence.toUpperCase()){
        console.log(`Woah, chill out!`);
        } else {
        console.log(`Whatever`);
    }

}

simonSays('simon ');
