const triangle = {
    sideA: 3,
    sideB: 7,
    sideC: 9,
    isEquilateral: function() {
        return this.sideA === this.sideB && this.sideA === this.sideC; //TODO: compress this line
    },
    isIsosceles: function() {
        return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
    },
    area: function() {
        semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
        const sum = semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC);
        _area = Math.sqrt(sum);
        return _area;
    },
    isObtuse: function() {
        const sidesAscending = [this.sideA, this.sideB, this.sideB].sort((a, b) => a - b);
        return this.sideC * this.sideC > this.sideB * this.sideB + this.sideA * this.sideA; //TODO: rework this. 
    },

    //TODO: introduce a detection mechanism for if valid triangle
}

console.log(triangle.isEquilateral()); // True
console.log(triangle.isObtuse()); // True

triangle.sideB = 3;
console.log(triangle.area());
console.log(triangle.isIsosceles()); // True

triangle.sideC = 3;
console.log(triangle.isEquilateral()); // True
console.log(triangle.isObtuse()); // False