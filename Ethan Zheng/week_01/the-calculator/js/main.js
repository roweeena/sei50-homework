console.log("The Calculator loaded!!!!!!!");

//declare functions here

//function that takes a numeric argument and returns its square
const squareNumber = function (num) {
    square = num * num;
    console.log(`The result of squaring the number ${num} is ${square}.`);
    return square;
}
//function that takes a numeric argument and returns its half
const halfNumber = function (num) {
    halfNum = num / 2;
    console.log(`Half of ${num} is ${halfNum}.`);
    return halfNum;
}

//function that takes two numeric arguments and returns the percentage of
//the first number over the second
const percentOf = function (numerator, denominator) {
    fraction = numerator / denominator;
    percentage = fraction * 100;
    console.log(`${numerator} is ${percentage}% of ${denominator}.`);
    return percentage + "%";
}

//function that takes a numeric argument as a radius, and calculates the area of a circle.
const areaOfCircle = function (radius) {
    area = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}.`);
    return area;
}

//PART 2
//function that takes a numeric argument, halves, squares, calculates the area of a circle,
//and takes that area as a percentage of the squared half
const abattoir = function (cow) {
    const halvedCow = halfNumber(cow);
    const forceFedCow = squareNumber(halvedCow);
    const bloatedCow = areaOfCircle(forceFedCow); 
    const profitMargin = percentOf(bloatedCow, forceFedCow);
    console.log(`Your profit margins from a ${cow}kg cow is ${profitMargin}.`); 
    return profitMargin;
}





