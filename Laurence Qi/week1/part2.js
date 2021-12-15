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

// write a funciton that composes an array with the resulting values for the functions above with one feeding into the other squared => half => percent ...

const combineValues = (num) => {
    const half = halfNumber(num);
    const square = squareNumber(half);
    const circle = areaOfCircle(square)
    const percent = percentOf(circle, square) //TODO: confirm if this is meant to  be a < 100% pecentage. 
} 

