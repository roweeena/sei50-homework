// # Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.

const simonSays = function(word){
    if (word === undefined || word.length === 0){ 
        return `Fine. Be that way!`
    } else if (word[word.length - 1] === '?'){ //could use .endsWith method
        return `sure`
    } else if (word === word.toUpperCase()){
        console.log()
        return `Woah, chill out!`
    } else {
        return 'Whatever'
    }
    
}

console.log('hi simon')


// function checkNum(string){
//     if (/1234567890/.test(string)){
//         console.log(string +1)
//     } else{
//         console.log('nope');
//     }
// }
