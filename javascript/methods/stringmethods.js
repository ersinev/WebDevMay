const MyText = 'lorem ipsum dolor sit amet';
var result;
//length
result = MyText.length;
//result =MyText[6]
//result= MyText.[MyText.length-1];

//charAt()
result= MyText.charAt(4);
//concat() method

var firstname="john";
var lastname="dalton";
result= firstname.concat(lastname);
result= "1234".concat("5678");


//startWith() and endWith() methods
result= MyText.endsWith("this is World");
result= MyText.startsWith("Hello");


//includes() method
result= MyText.includes("this");

//indexOf() method

result= MyText.indexOf("this");

//replace() method

result= MyText.replace("this","that");
result=MyText.replaceAll("this","that");

//split() method    - splits the string into an array of substrings
result= MyText.split(" ");
var names="john,dalton,smith";
result= names.split(",");


//slice() method
result= MyText.slice(6,MyText.length-4); //6 to last 4 characters

//toUpperCase() method
result= MyText.toUpperCase();   //converts to uppercase
//lowerCase() method
result= MyText.toLowerCase();
//trim() method
var mytext2="                this is a test          ";
result= mytext2.trim(); //removes whitespace from both ends of the string
result= mytext2.trim().replaceAll(" ",""); //removes whitespace from both ends of the string and replaces all spaces with empty string


//match() method
var mynewtext="dolor ipsum  dolor brussel sit brussel ipsum amet ASDAD ASDASD 12346789";
result= mynewtext.match(/brussel/);
result= mynewtext.match(/brussel/gm);


const fruits=["apple","banana","orange", "pineapple"];
result= fruits.entries();

console.log(result); 