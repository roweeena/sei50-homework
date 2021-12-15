console.log("Strings loaded!!!!!!!");

//declare functions here

//Dr Evil - Takes a numeric argument and returns that in dollars. Adds '(pinky)' if the argument is 100000
const DrEvil = function (money) {
    if (money !== 1000000) {
        return `${money} dollars`;
    } else {
        return `${money} dollars (pinky)`;
    }

}

//MixUp - Takes two strings, returns the combination of both, but with the first character of each swapped

const mixUp = function (string1, string2) {
    const string1Start = string1.charAt(0); //stores only the first char of the first string
    const string2Start = string2.charAt(0); //stores only the first char of the second string
    //these lines replaces the first instance of their first character with the first character of the other string
    const newString1 = string1.replace(string1Start, string2Start); 
    const newString2 = string2.replace(string2Start, string1Start);

    const stringsTogether = newString1.concat(" ", newString2); //concatenates the frankensteinian strings
    return stringsTogether;
}

//FixStart - Takes a string argument, replaces all occurences of the first character (except the first) with "*"

const fixStart = function (toCensor) {

    const forbiddenLetter = toCensor.charAt(0); //stores the first char of the string
    const beheadedString = toCensor.slice(1); //stores a new string that contains every char from the argument except the first
    const censoredBeheadedString = beheadedString.replaceAll(forbiddenLetter, "*" ); //replaces all instances of the first char with "*"
    const censoredString = forbiddenLetter.concat(censoredBeheadedString); //frankensteins the first char and the censored string
    return censoredString;
}

//Verbing - Takes a string argument, and converts into present participle or adverb depending on string length
const verbing = function (badEnglish) {

    //if statements for each edgecase
    if (badEnglish.length >= 3) {
        //nested if statement if the last three chars === 'ing'
        //LEGACY - const lastThreeChar = badEnglish.slice(-3);
        if (badEnglish.endsWith('ing') === true) {
            const adverb = badEnglish.concat('ly');
            return adverb;
        } else {
            const presentParticiple = badEnglish.concat('ing');
            return presentParticiple;
        }
    } else {
        return badEnglish;
    }

}

//Not Bad - Takes a string argument and performs the following operations
// 1. Finds the first appearance of 'not' and 'bad'
// 2. If 'bad' follows 'not', removes 'not' and replaces 'bad' with 'good'
// 3. Else, do nothing and return the original string

const notBad = function (sentence) {
    //Need two if statements
    //if 'not' AND 'bad' exist
        //if 'not' and 'bad' are in the right order
    //else


    if (sentence.includes('not ') && sentence.includes('bad')) {
        if (sentence.indexOf('not ') < sentence.indexOf('bad')) {
            //remove 'not'
            const noNotSentence = sentence.replace('not ', "");
            //replace 'bad' with 'good'
            const goodSentence = noNotSentence.replace('bad', 'good');
            return goodSentence;
        } else {
            return sentence;
        }
    } else {
        return sentence;
    }
}
//Edge cases to program for later
//when 'not' isnt the first word - DONE
//when 'not' and 'bad' are next to each other, but arent the first two words of the string - DONE


