const rectangle = {
    length : 4,
    width: 4
};

const isSquare=(rect) =>{
    if(rect.length===rect.width){
    return ("It is a square");
    }
    else 
    return ("It is not a square");
};

const area=(rect) =>{
   return rect.length*rect.width;
};
const perimeter=(rect) =>{
    return (rect.length+rect.width)*2;
};
console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));

const triangle = {
    sideA: 90,
    sideB: 5,
    sideC: 6
};

const isEquilateral=(tri)=>{
    if(tri.sideA==tri.sideB&&tri.sideB==tri.sideC){
        return ("This triangle is equilateral.");
    } else
        return("This triangle is not equilateral.");
};
const isIsosceles=(tri)=>{
    if(tri.sideA==tri.sideB || tri.sideB==tri.sideC || tri.sideA || tri.sideC){
        return ("This triangle is isosceles.");
    } else
        return("This triangle is not isosceles.");
};

const areaOfTriangle=(tri)=>{
    let semiPerimeter=(tri.sideA+tri.sideB+tri.sideC)/2;
    let areaOfTri = Math.sqrt(semiPerimeter*(semiPerimeter-tri.sideA)*(semiPerimeter-tri.sideB)*(semiPerimeter-tri.sideC));
    return (`This triangle's area is :  ${areaOfTri.toFixed(2)} cm^2 rounded to the nearest hundredth`);
}

const isObtuse=(tri)=>{
    if(tri.sideA+tri.sideB>tri.sideC&&tri.sideB+tri.sideC>tri.sideC&&tri.sideA+tri.sideC>tri.sideB){
        if (tri.sideB>tri.sideA&&tri.sideB>tri.sideC){
            if ((tri.sideB*tri.sideB)>(tri.sideA*tri.sideA)+(tri.sideC*tri.sideC)){
                return ("This triangle is obutus");
            }
        } else if (tri.sideC>tri.sideA&&tri.sideC>tri.sideB){
            if ((tri.sideC*tri.sideC)>(tri.sideA*tri.sideA)+(tri.sideB*tri.sideB)){
                return ("This triangle is obutus");
            } 
            else {
                if ((tri.sideA*tri.sideA)>(tri.sideB*tri.sideB)+(tri.sideC*tri.sideC))
                {
                return ("This triangle is obutus");
                }
       
            }
        }
    }
    else 
        return ("Is is not a tiangle");
 
}

console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(areaOfTriangle(triangle));
console.log(isObtuse(triangle));