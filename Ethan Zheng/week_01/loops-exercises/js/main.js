console.log('loops exercises loaded');


//Even Odd -function that iterates from zero to twenty, reporting if the number is odd or even
const evenOdd = function () {
    for (let i = 0; i <=20; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even.`);
        } else {
            console.log(`${i} is odd.`);
        }
    }
}

//Multiplication Tables - function that iterates every timestables from 1 to 10.
const myChildhood = function () {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${j} * ${i} is ${j * i}.`);
        } 
    }
}


//Assign Grades - function that takes a numeric argument and assigns a lettered grade to that argument

const assignGrade = function (numberGrade) {
    let letterGrade = 'Ungradeable';
    if (numberGrade >90) {
        letterGrade = 'A';
    } else if (numberGrade > 80) {
        letterGrade = 'B';
    } else if (numberGrade > 70) {
        letterGrade = 'C';
    } else if (numberGrade > 60) {
        letterGrade = 'D';
    } else if (numberGrade > 50) {
        letterGrade = 'E';
    } else if (numberGrade > 40) {
        letterGrade = 'F';
    } else if (numberGrade > 30) {
        letterGrade = 'G';
    } else if (numberGrade > 20) {
        letterGrade = 'H';
    } else if (numberGrade > 10) {
        letterGrade = 'I';
    } else if (numberGrade > 0) {
        letterGrade = 'J';
    } 
    return letterGrade;
}

//The Grade Assigner - Check the results of assignGrade function from the conditionals exercise 
//for every value from 60 to 100 - so your log should show 
//"For 89, you got a B. For 90, you got an A.", etc.

const gradeAssignLoop = function () {
    for (let i = 60; i <= 100; i++) {
        console.log(`For ${i}, you got a ${assignGrade(i)}.`);
    }
}

//Calling Every Function to test

console.log('Even Odd running!!!!!!!!');
evenOdd();

console.log('Multiplication Tables running!!!!!!!!!');
myChildhood();

console.log('The Grade Assigner running!!!!!!!!');
gradeAssignLoop();
