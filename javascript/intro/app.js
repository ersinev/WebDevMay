// var name = "john";
// console.log(name);
// //console.log(x);
// let website = "adadasddsa";
// website = "asdasasdasd";
// console.log(website);
// var user = "root";
// var number1 = 10;
// var number2 = 20;
// var total = number1+number2;
// total = "20"+ "10"
// console.log(total);
// var country = "Brussel\'s";
// console.log(country)
// document.getElementById("message").innerText= "hello friend"
// document.getElementById("container").innerHTML = "<h2>container</h2>"
// var weight = 69;
// var height = 1.81;
// var bmi = weight/Math.pow(height,2)
// console.log(bmi);
// var brut =3000
// var percent= 21/100;
// var net = brut-(brut*percent);
// console.log(net);
// operators

/*result = age>=18 ? "you are more than 18 you can drink": "you are less than 18"
console.log(result)*/

// if(18<age){
//     console.log("you are less then 18")
// }
// else if(age=18){
//     console.log("you can drink")
// }
// else{
//     console.log("you are more than 18")
// }

var age = 100;
var money = 145 ;

if(age>18 && money>100){
    console.log("you are more than 18 and you have money")
}
else if (age>18 && money<100){
    console.log("you are more than 18 but you dont have money")
}
else if(age<18 && money>100){
    console.log("you have money but your age is under 18")
}
else {
    console.log("you dont have money and your age is under 18")
}

var number1 = 1;
switch(number1){
    case 0: console.log("less then 1");
    break;
    case 1 :console.log("equal to 1");
    break;
    default:console.log("more  than 1");
    break;
}

for(var i=1;i<30;i++){
    if (i%5==0 || i%6==0){
       console.log(i);
    }
}
var message = "this is a message";
for(var j=1;j<10;j++){
    document.write(message+"<br>");
}

function Hesapla()
		{
			var k1=Number(document.getElementById("txtKenar1").value);
			var k2=Number(document.getElementById("txtKenar2").value);
			var hipotenus=Math.sqrt((k1*k1)+(k2*k2));
			document.getElementById("sonuc").innerHTML="Hipotenüs : "+hipotenus;
		}
		
		var hesapBtn=document.getElementById("btn");
		hesapBtn.onclick=Hesapla;

