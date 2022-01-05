// # Geometry Function Lab

// ### Part 1, Rectangle

// Given a `rectangle` object like the one below, write the following functions:



const rectangle = {
    length: 6,
    width: 7,
};

// * isSquare(rect) - Returns whether the rectangle is a square or not
const isSquare = function (rectangle){
    if (rectangle.length === rectangle.width){
        return true;
    } else {
        return false;
    }
};
console.log('is the rectangle a square?', isSquare(rectangle));

// * area(rect) - Returns the area of the rectangle
const areaRect = function (rectangle){
    const totalArea = (rectangle.length * rectangle.width);
    return totalArea;
}
const logAreaRect = areaRect(rectangle);
console.log('the area of this rectangle is', logAreaRect);

// * perimeter(rect) - Returns the perimeter of the rectangle
 const findPerimeter = function(rectangle){
    const perimeter = (rectangle.length + rectangle.width)*2;
    return perimeter;
 };
const logPerimeter = findPerimeter(rectangle);
console.log('the perimeter of thie rectangle is', logPerimeter);

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

// ### Part 2, Triangle

const triangle = {
    sideA: 3,
    sideB: 5,
    sideC: 8,
};

// Given a `triangle` object like the one below, write the following functions:

// * isEquilateral(tri) - Returns whether the triangle is equilateral or not
const isEquilateral = function (triangle){
    if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC){
        return true;
    } else {
        return false;
    }
};
const logIsEquilateral = isEquilateral(triangle);
console.log('is this triangle have equal sides?', logIsEquilateral);

// * isIsosceles(tri) - Returns whether the triangle is isosceles or not
const isIsosceles = function(triangle){
    if(triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC){
        return true;
    } else {
        return false;
    }
};
const logIsIsosceles = isIsosceles(triangle);
console.log('is this triangle does not have equal sides?', logIsIsosceles);

// * area(tri) - Returns the area of the Triangle


const areaTri = function(triangle){
    const s = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
    const totalArea = Math.sqrt(s*(s - triangle.sideA)*(s - triangle.sideB)*(s - triangle.sideC));
    return totalArea.toFixed(3);
};
const logAreaTri = areaTri(triangle);
console.log('the total area of a triangle is', logAreaTri);

// * isObtuse(tri) - Returns whether the triangle is obtuse or not

const isObtuse = function(triangle){
    if ((triangle.sideA*triangle.sideA) + (triangle.sideB*triangle.sideB) < (triangle.sideC*triangle.sideC)){
        return true;
    } else {
        false;
    }
    };
const logIsObtuse = isObtuse(triangle);
console.log('is the triangle a obtuse', logIsObtuse);


// As above, these functions should take a single object as an argument, which will have the same keys as the `triangle` above, and which you will use for your calcuations.