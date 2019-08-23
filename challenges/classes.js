// 1. Copy and paste your prototype in here and refactor into class syntax.

//CHANGED NAME OF CUBOID AND CONSTRUCTOR CLASS - CONSOLE THROWS ALREADY DECLARED ERROR DUE TO prototypes.js
class CuboidMakerClass{
    constructor(attrs) {
        this.newLength = attrs.length;
        this.newWidth = attrs.width;
        this.newHeight = attrs.height;
    }
    volume() {
        return this.newLength * this.newWidth * this.newHeight;
    }
    surfaceArea() {
        return 2 * (this.newLength * this.newWidth + this.newLength * this.newHeight + this.newWidth * this.newHeight)
    }
};

class CubeMaker extends CuboidMakerClass {
    constructor(cubeAttrs) {
        super(cubeAttrs);
    }
    cubeVolume() {
        return Math.pow(this.newLength, 3)
    }
}

const cuboidB = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
}); 

const cube = new CubeMaker ({
    length: 4,
    width: 4,
    height: 4
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidB.volume()); // 100
console.log(cuboidB.surfaceArea()); // 130
console.log(cube.cubeVolume())

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

