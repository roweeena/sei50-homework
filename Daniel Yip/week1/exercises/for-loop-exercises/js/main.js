console.log(`JS :)`);

// # Exercises: For loops

// ## The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++){
    if (i % 2 === 0){
        console.log(`${i} is even`);
    } else{
        console.log(`${i} id odd`);
    }
}


// ## Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (i = 0; i <= 10 ; i++){

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    // console.log(`${i} * 9 = ${i * 9}`);
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// ## The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.



for (i = 60; i <=100; i++){
    if (i > 90){
        console.log(`For ${i}, you got an A`)
    } else if (i >= 80){
        console.log(`For ${i}, you got a B`)
    } else if (i >= 70){
        console.log(`For ${i}, you got a C`)
    } else if (i >= 60){
        console.log(`For ${i}, you got a D`)
    } else {
        console.log("You need to work harder!");
    }
}





// The Grade Assigner
// Write a function named assignGrade that:

// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(score){
    if (score >= 90){
        return "A";
    } else if (score >= 80){
        return "B";
    } else if (score >= 70){
        return "C";
    } else if (score >= 60){
        return "D";
    } else if (score >= 50){
        return "E";
    } else if (score >= 40){
        return "F";
    } else {
        return `*`;
    }
}

console.log(assignGrade(10))
console.log(assignGrade(40))
console.log(assignGrade(50))
console.log(assignGrade(66))
console.log(assignGrade(78))
console.log(assignGrade(91))
console.log(assignGrade(100))

for (i = 100; i > 0; i--){
    const result = assignGrade(i);
    console.log(`A mark of ${i} gives you a grade of ${result}`)
}

