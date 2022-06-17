var result;
var n1 ="10";
var n2 =10;
var n3 ="10.5";
var n4 ="10 15 20";
var n5 ="10,15,20";
var n6 ="9e+2";
var n7 =10e+2; // scientific notation
const PI= 3.143469793;
var n8 =2000.54;

// toString() method
result= n2.toString(); //return string representation of number

// parseInt() method
result= parseInt(n1); //return integer representation of number
result= parseInt("10") + parseInt("20"); //example of adding two numbers

//parseFloat() method
result= parseFloat(n3); //return floating point representation of number

//toExponential() method
result= PI.toExponential(2); //return exponential representation of number

//toFixed() method
result=  number.toFixed() //return fixed point representation of number
result= Number("10");
// result= Number(undefined);
// result= Number(null);
// result= Number(true);
// result= Number(false);
// result= Number.MAX_VALUE;
// result= Number.MIN_VALUE;
// result= Number.MAX_SAFE_INTEGER
// result= Number.POSITIVE_INFINITY
// result= Number.NEGATIVE_INFINITY
// result= Number.NaN
// result= Number.isFinite();
// result= Number.isFinite(Infinity)
// result= Number.isInteger("10");
// result= Number.isNaN(10/NaN);









console.log(result);
