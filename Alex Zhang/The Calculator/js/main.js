const squareNumber = function(num){
    const squareNum = num * num;
    console.log (`The result of squaring the ${num} is ${squareNum}`);
    return squareNum;
};

const halfNumber = function(num){
    const result = num/2;
    console.log(`Half of ${num} is ${result}`);
    return result;
};



const percentOf = function(numOne, numTwo){
    const percentage = 100 * numOne / numTwo + "%";
    console.log(`${numOne} is ${percentage} of ${numTwo} `);
    return percentage;
};




const areaOfCircle = function(radius){
    const area= (Math.PI*radius*radius).toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${area}`);
    return area;
};



const finalFunction = function(number){
   const half = halfNumber(number);
   const square = squareNumber(number);
   const areaOfACircle = areaOfCircle(square);
   const newPercentage = percentOf(areaOfACircle, square); 
};


squareNumber(3);
halfNumber(5);
percentOf(2,4);
areaOfCircle(2);
finalFunction(5);



const drEvil = function (amount){
    if (amount === 1000000){
        console.log( `${amount} dollars (pinky)`);
        return amount;
    }else{
        console.log(`${amount} dollars`);
        return amount;
    }
};
drEvil(10);
drEvil(1000000);



console.log("+++++++++++++++++++++++++++++++++++++++")


const mixUp = function (stringOne, stringTwo){

    let firstLetter = stringOne.charAt(0), 
        secondLetter = stringOne.charAt(1),
        thirdLetter = stringTwo.charAt(0), 
        fourthLetter = stringTwo.charAt(1);

    let newStringOne= thirdLetter + fourthLetter + stringOne.slice(2);
    let newStringTwo= firstLetter + secondLetter + stringTwo.slice(2);

    let combineTwoStrings = console.log(newStringOne+" "+ newStringTwo);

    return combineTwoStrings;
};
mixUp("mix","pod");
mixUp("dog","dinner");

const fixStart = function(string){
    let newString = string.substring(1);
    const char =string.charAt(0);
    const repeat =new RegExp(char,'g');
    let finalString =newString.replace(repeat, "*");
    let action = console.log(char + finalString);
    return action;
};
fixStart('babble');
fixStart("aabsaaa");




console.log("+++++++++++++++++++++++++++++++++++++++")

const verbing = function(string){
let length=string.length;
let lastThreeLetters=string.substring(length-3,length);
//console.log(lastThreeLetters);
if (length>=3){
    if (lastThreeLetters==="ing"){
        let newString=string+"ly";
        console.log(newString);
    }   
    else {
        let newString = string + "ing";
        console.log(newString);
    }
    }
else{
    console.log(string);
    return string;
    }   
}
verbing("walk");
verbing("swimming");
verbing("go");




console.log("+++++++++++++++++++++++++++++++++++++++")

const notBad = function(string){
let positionOfNot = string.search("not");
let positionOfBad = string.search("bad");
if (positionOfBad === -1 || positionOfNot === -1){
    return string;
}
else if (positionOfBad > positionOfNot){
    let subStringOfNotToBad = string.substring(positionOfNot,positionOfBad+3);
    let newString=string.replace(subStringOfNotToBad, "good");
    return newString;
}
else {
    return string;
}
console.log(string);

}
let a=notBad('This dinner is not that bad!');
let b=notBad('This movie is not so bad!');
let c=notBad('This dinner is bad!');

console.log(a);
console.log(b);
console.log(c);

const rainDrops = function(num){
    if(num%3===0&&num%7===0&&num%5===0){
        console.log("PlingPlangPlong");
    }
    else if (num%3===0&&num%7===0){
        console.log("PlingPlong");
    }   
    else if (num%5===0&&num%7===0){
        console.log("PlangPlong");
    }
    else if (num%3===0&&num%5===0){
        console.log("PlingPlang");
    }
    else if (num%3===0){
        console.log("Pling");
    }
    else if (num%5===0){
        console.log("Plang");
    }
    else if (num%7===0){
        console.log("Plong");
    }
    else {
        let string=num.toString();
        console.log(string);
    }

}
rainDrops(28);
rainDrops(1755);
rainDrops(34);
