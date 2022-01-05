// https://gist.github.com/textchimp/798d0760354f9eb7d4906e284dad9f95

// Part 1
const squareNumber = function(num) {
  const square = num * num;

  console.log(`The result of squaring the number ${num} is ${square}.`);
  return square;
}

const halfNumber = function(num) {
  const half =  num / 2;

  console.log(`Half of ${num} is ${half}.`);
  return half;
}

const percentOf = function(num1, num2) {
  const percent = num1 / num2 * 100;

  console.log(`${num1} is ${percent}% of ${num2}.`);
  return percent;
}

const areaOfCircle = function(radius) {
  const area = radius * radius * Math.PI;
  const rounded = Math.round(area * 100) / 100;
  // const rounded = area.toFixed(2);

  console.log(`The area for a circle with radius ${radius} is ${rounded}.`);
  return rounded;
}


// Part 2
const combination = (num) => {
  let half = halfNumber(num);
  let square = squareNumber(half);
  let circle = areaOfCircle(square);
  let percentage = percentOf(circle, squareNumber);

  return percentage;
}