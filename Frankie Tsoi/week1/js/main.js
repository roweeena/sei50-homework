// # Exercises: For loops

// ## The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++){
    //console.log(i);
    if(i % 2===0){
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is old`);
    }
};



// ## Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").


for (let i = 0; i <= 10; i++){
    const result = i * 9;
    console.log(`${i} * 9 = ${result}`);
for (let j = 1; j <= 10; j++){
    console.log(`${i} * ${j} = ${ i * j}`);
    }//inner loop

} //outer loop








// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// ## The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const assignGrade = function( mark ){
    let score = '';
    if (mark > 90){
        score = 'A';
    } else if (mark >80){
        score = 'B';
    } else if (mark >70){
        score = 'C';
    } else if (mark >60){
        score = 'D';
    } else if (mark>50){
        score = 'E';
    } else {
        score = 'F';
    }
    return score;
};

for (let i = 100; i >= 0; i --){
    const result = assignGrade(i);
    console.log(`A mark of ${i} gives a grade of ${assignGrade}`);   
}

const randomNums = [12, 23, 80, 90];


