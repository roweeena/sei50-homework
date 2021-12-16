// Geometry Function Lab -----------------------------------------------------------
// Part 1, Rectangle

// isSquare(rect) - Returns whether the rectangle is a square or not
const isSquare = function(rect) {
  return rect.length === rect.width;
}

// area(rect) - Returns the area of the rectangle
const area = function(rect) {
  return rect.length * rect.width;
}

// perimeter(rect) - Returns the perimeter of the rectangle
const perimeter = function(rect) {
  return (ect.length * rect.width) * 2;
}



// Part 2, Triangle
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
const isEquilateral = function(tri) {
  return tri.sideA === tri.sideB && tri.sideB === tri.sideC;
}

// isIsosceles(tri) - Returns whether the triangle is isosceles or not
const isIsosceles = function(tri) {
  return tri.sideA === tri.sideB || tri.sideB === tri.sideC || tri.sideA === tri.sideC;
}

// area(tri) - Returns the area of the Triangle
const triArea = function(tri) {
  return (tri.sideA + tri.sideB + tri.sideC) / 2;
}

// isObtuse(tri) - Returns whether the triangle is obtuse or not
const isObtuse = function(tri) {
  // ...
}


// The Cash Register -----------------------------------------------------------
const cashRegister = function(cart) {
  let total = 0;

  for(let i in cart) {
    let price = parseFloat(cart[i]);

    total += price;
  }

  return total;
}

// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// console.log(cashRegister(cartForParty)); 