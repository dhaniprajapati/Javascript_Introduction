//convert 42 inches to feet
let inches = 42;
//1 feet = 12 inches
let feet = inches / 12;
console.log("42 inches = "+feet+" feet");

//convert Rectangular Plot of 60 feet x 40 feet in meters
let length = 60;
let breadth = 40;
//area of rectangle= length * breadth
let areaInFeet = length*breadth;
//1 foot=0.3048 meters
let areaInMeters = areaInFeet * 0.3048;
console.log("Rectangular Plot of 60 feet x 40 feet in meters is "+areaInMeters +"meter sq.");

//calculate area of 25 such plots in acres
//1 acre=4046.86 m²
let totalAreaInAcres= 25*(areaInMeters/4046.86);
console.log("Area of 25 rectangular plots: "+totalAreaInAcres+ " acres");
