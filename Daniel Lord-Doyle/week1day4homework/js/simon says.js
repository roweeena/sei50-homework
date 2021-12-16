// SIMON SAYS

const simonSays = (string) => {

    // if we dont give it an input, Simon says 'whatever'
    if (string.length < 1) {
        return 'Be that way.' 
    }

    // if shout at Simon (ALL CAPS), Simon says 'woah, chill out!'
    else if (string === string.toUpperCase()) {
        return 'Woah, chill out!'  
    
    // if we ask a question anywhere in the string, Simon says 'Sure.' - he's a yes man!
    } else if (string.includes('?')) {
        return 'Sure.' 
    
    // For everything else, he seems not to care much. He says 'whatever'.
    } else {
        return 'Whatever.' 
    }
}

console.log(simonSays('HELLO'))
console.log(simonSays('Can I help?'))
console.log(simonSays(''))
console.log(simonSays('Wassuuuppp my dude - you legend.'))