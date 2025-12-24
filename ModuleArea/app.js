/* app.js */ 

const radius = 5;
const sideLength = 10;

// import the entire shape-area.js module or destructure the individual functions here

// use the imported circleArea and squareArea methods here
const { circleArea } = require('./calculateArea.js');
const { squareArea } = require('./calculateArea.js');
const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);
console.log("circle area: "+areaOfCircle);
console.log("square area: "+areaOfSquare);
