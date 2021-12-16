const squareNumber = (num) => {
    let squared = num * num;
    return `The result of the squaring of ${num} is ${squared}`;
}

const halfNumber = (num) => {
    return `The result of the halving of ${num} is ${num / 2}`;
}

const percentOf = (num1, num2) => {
    return `${num1} is ${(num1 / num2 * 100).toFixed(2)}% of ${num2}`;
}

const areaOfCircle = (radius) => {
    return `The area of a circle with radius ${radius} is ${(radius * radius * 3.1415).toFixed(2)}`;
}

console.log(squareNumber(5));
console.log(halfNumber(3));
console.log(percentOf(5,90));
console.log(areaOfCircle(3));


