var UserInput = document.getElementById("userinput");
var result = document.getElementById("result");
function ScoreCalculator(){
    
    if(UserInput.value >50){
        result.innerText = "You passed the exam";
    }
    else{
        result.innerText = "You failed the exam";
    }
}


