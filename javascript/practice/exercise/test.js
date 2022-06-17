// result= document.getElementById("result");
// var userInput= prompt("Enter your name");
// //console.log(typeof userInput) ;
// console.log(isNaN(userInput));

// if(isNaN(userInput))
//     {

//     result.innerText= "Number is not an integer";
        
// }
// else{
    
//     result.innerText= `Your number is ${userInput}`;
// }  


// var typeinput= typeof(userInput);
// if(typeinput== String)
// {
//     result.innerText= "This is not a number";
// }
// else{
//     result.innerText= `Your number is ${userInput}`;
// }

// var n1 =prompt("Enter your number");
// pars1 = parseInt(n1);


// if(isNaN(n1)){
//     alert("Enter a number");
//     var n11= prompt("Enter first number again");
//     pars11= parseInt(n11);
//     var n22= prompt("Enter second number");
//     pars22= parseInt(n22);
//     var sum= pars11 + pars22;
//     result = document.getElementById("result");
//     result.innerText= `The sum is ${sum}`;
// }
// else{
//     var n2= prompt("Enter second number");
//     pars2 = parseInt(n2);
//     var sum= pars1 + pars2;
//     result = document.getElementById("result");
//     result.innerText= `The sum is ${sum}`;
// }


result2= document.getElementById("result2");

do{
    
   var num1 = prompt("enter a number"); 
   
   if(isNaN(Number(num1))){
    alert("You need to enter a number");
   }
   
    
    
}
while(isNaN(Number(num1)));

do{
    var num2 = prompt("Enter second number");
    if(isNaN(Number(num2))){
        alert("You need to enter a number");
       }
    
   
}
while(isNaN(num2));
var sum= parseInt(num1) + parseInt(num2);

result2.innerText= `The sum is ${sum}`;




