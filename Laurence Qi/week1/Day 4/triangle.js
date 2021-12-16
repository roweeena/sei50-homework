const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 5,
    isEquilateral: function () {
        return this.sideA === this.sideB && this.sideA === this.sideC; //TODO: compress this line
    },
    isIsosceles: function () {
        return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
    },
    area: function () {
        semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
        _area = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));
        return _area;
    },
    isObtuse: function () {
        return this.sideA !== this.sideB || this.sideA !== this.sideC || this.sideB !== this.sideC;
    },
}

console.log(triangle.isEquilateral()); // True

triangle.sideB = 3;
console.log(triangle.area());
console.log(triangle.isIsosceles()); // True

triangle.sideC = 3;

console.log(triangle.isEquilateral()); // True
console.log(triangle.isObtuse()); // False
