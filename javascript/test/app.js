function Calculate() {
  var d1 = document.getElementById("degree").value;

  
  if (d1 > 20) {
    document.getElementById("result").innerHTML ="You dont need to wear a scarf";
  } else if (d1 <= 20) {
    document.getElementById("result").innerHTML = "You need to wear a scarf!";
  }
  else if (d1 == "rainy") {
    document.getElementById("result").innerHTML = "it is rainy!";
  }
  else {
    document.getElementById("result").innerHTML = "Please enter a valid number";
  }
}

var resultBtn = document.getElementById("btn"); 
resultBtn.onclick = Calculate;

    function myFunction() {
        var rain = document.getElementById("rain");
        var sun = document.getElementById("sun");
        var snow = document.getElementById("snow");
        if (rain.checked == true) {
            document.getElementById("result2").innerHTML = "it is rainy!";
        } else if(sun.checked == true) {
            document.getElementById("result2").innerHTML = "it is sunny!";
        } else if(snow.checked == true) {
            document.getElementById("result2").innerHTML = "it is snowing!";
        }
        else {
            document.getElementById("result2").innerHTML = "Please choose the weather";
        }
    }
    var resultBtn2 = document.getElementById("btn2"); 
    resultBtn2.onclick = myFunction;


function degreeToFahrenheit() {
  var degreeto = document.getElementById("degreeto").value;  
  var fahrenheit = degreeto * 9 / 5 + 32;
  document.getElementById("result3").innerHTML = degreeto + " degree is " + fahrenheit + " in Fahrenheit";
}
var resultBtn3 = document.getElementById("btn3"); 
    resultBtn3.onclick = degreeToFahrenheit;


