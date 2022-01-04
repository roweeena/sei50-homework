// make rectangle object with area perimeter and isSquare functions

const rectangle = {
    length: 12,
    width: 11,
    isSquare: function () {
        return this.length === this.width;
    },
    area: function () {
        return this.length * this.width;
    },
    perimeter: function () {
        return this.length * 2 + this.width * 2;
    }
};


console.log(rectangle.isSquare())