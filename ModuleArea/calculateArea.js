/* Calculatearea.js */
const { PI } = Math;

// Define and export circleArea() and squareArea() below
module.exports.circleArea=function (radius)
{
  return PI * radius * radius;
}

function areaOfSquare(sideLength)
{
  return sideLength * sideLength;
}
module.exports.squareArea = areaOfSquare;