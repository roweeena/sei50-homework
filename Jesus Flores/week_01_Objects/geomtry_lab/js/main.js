/* Geometry Function Lab
Part 1, Rectangle
Given a rectangle object like the one below, write the following functions:

isSquare(rect) - Returns whether the rectangle is a square or not
area(rect) - Returns the area of the rectangle
perimeter(rect) - Returns the perimeter of the rectangle */

/* const rectangle = {
    length: 4,
    width: 8,
    isSquare:function(){
        return this.length === this.width ? "Is a  square" : "Not square :c, is a rectangle";
    },
    area: function(){
        return `Area of rectangle: ${this.length * this.width}`;
    },
    perimeter: function(){
        return `Perimeter of rectangl: ${ 2* (this.length + this.width) }`;   
    }
};   

 */
/* Part 2, Triangle
Given a triangle object like the one below, write the following functions:

isEquilateral(tri) - Returns whether the triangle is equilateral or not
isIsosceles(tri) - Returns whether the triangle is isosceles or not
area(tri) - Returns the area of the Triangle
isObtuse(tri) - Returns whether the triangle is obtuse or not */



const triangle = {
    sideA: 15,
    sideB: 10,
    sideC: 17,
    isEquilateral: function(){
        if(this.sideA === this.sideB && this.sideB === this.sideC ){
            return "Triangle is Equilateral";
        }
        return "NoEquilateral";
    },
    isIsosceles: function(){
        if(this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA){
            return "Triangle is isoceles";
        }
        return "No isoceles"
    },
    area: function(){
        const semiPerimeter = (this.sideA  + this.sideB + this.sideC ) / 2;
        return Math.sqrt( semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC )).toFixed(2);
    },
    isObtuse: function(){
        // Formula if Longest  Length sqr > other  length sqr + lenght sqr  (Obtuse);
        const longestLength = Math.pow(this.sideC, 2);
        const restOfLength = (Math.pow(this.sideA, 2))+(Math.pow(this.sideB, 2))
        return longestLength > restOfLength ? "Triangle is obtuse" : "Nope :c";
    }

  };






