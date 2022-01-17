console.log("Geometry Lab loaded");

//Part 1 - Rectangle

const isSquare = function (object) {
    if (object.length === object.width) {
        return true;
    } else {
        return false;
    }

}
const areaSquare = function (object) {
    return (object.length * object.width);
}

//Part 2 - Triangle

const isEquilateral = function (object) {
    if (object.sideA === object.sideB && object.sideB === object.sideC) {
        return true;
    } else {
        return false;
    }
}

const isIsosceles = function (object) {
    if (object.sideA === object.sideB || object.sideA === object.sideC || object.sideB === object.sideC) {
        return true;
    } else {
        return false;
    }
}

const areaTriangle = function (object) {
    const p = (object.sideA + object.sideB + object.sideC) / 2; // p = half the perimeter
    return (Math.sqrt(p * (p - object.sideA) * (p - object.sideB) * (p - object.sideC))); // heron's formula
}

const isObtuse = function (object) {
    a = object.sideA * object.sideA
    b = object.sideB * object.sideB
    c = object.sideC * object.sideC
    if (a > b + c || b > a + c || c > a + b) {
        return true;
    } else {
        return false;
    }  
}
//BUGS - Invalid triangles may be passed through - im not fixing this