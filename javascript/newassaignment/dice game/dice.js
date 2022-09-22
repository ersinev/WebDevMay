let result1;
let result2;
var score=0;

function Dice() {
    result1 = Math.round(Math.random() * 5) + 1;
    result2 = Math.round(Math.random() * 5) + 1;
    document.getElementById("dice1").innerHTML = "Dice 1: " + result1;
    document.getElementById("dice2").innerHTML = "Dice 2: " + result2;
    
if (result1 == result2) {
   
   score+=1;
}
document.getElementById("score").innerHTML = "Score: " + score;
  
}



var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);













