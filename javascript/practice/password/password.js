// var password = "1234";
// var remainingAttempts = 3;
// do{
//     var UserInput = prompt("Enter your password");
//     if(UserInput === password){
//         alert("Correct password");

//     }
//     else if(remainingAttempts === 0){
//         alert("You have exceeded the number of attempts");
//     }
//     else{

//         remainingAttempts--;
//     alert("Incorrect password you have " + remainingAttempts + " attempts left");

//     }

// }while(remainingAttempts> 0);
//  window.setInterval(UpdateTime, 1000)
//  let lead = document.querySelector('.lead');

// function UpdateTime() {
//     let date2 = new Date()
//     var hours, minutes, seconds;
//     hours = date2.getHours();
//     minutes = date2.getMinutes();
//     seconds = date2.getSeconds();
//     lead.innerHTML = `${hours}:${minutes}:${seconds}`
//     if(seconds % 2 === 0){
//         lead.style.color = 'red';
//     }
//     else if(seconds % 3 === 0){
//         lead.style.color = 'blue';
//     }
    
    
//     else if(seconds % 5 === 0){
//         lead.style.color = 'green';
//     }
//     else{
//         lead.style.color = 'black';
//     }
// }

// var some   ="hello world"
// console.log(some.indexOf("o"))

// var cuboid = {
//     length: 25,
//     width: 50,
//     height: 200
// };

// //your code goes here

// var cuboid = {
//     length: 25,
//     width: 50,
//     height: 200
// };

//your code goes here
// function mult (cuboid){
//     var result = (cuboid.height) * (cuboid.length)*(cuboid.width);
// }
// console.log(mult(cuboid));
// console.log(cuboid.length*cuboid.height*cuboid.width)
// var myString = "abcdef";
// console.log(myString.length);
// function contact(name, number) {
//     this.name = name;
//     this.number = number;
//     this.print= print;
// }

// var a = new contact("David", 12345);
// var b = new contact("Amy", 987654321);
// a.print();
// b.print();
// function print(){
//     console.log('${this.name}: ${number}')
// }


// function main() {
//     //take the number of passed levels
//     var levels = parseInt(readLine(),10);
//     var points = new Array();
    
//     var count = 0;
//     while(count<levels){
//         var elem = parseInt(readLine(),10);
//         points[count] = elem;
//         count++;
//     }
    
//     var sum = 0;
//     //calculate the sum of points 
//     var total = elem+count;
//     //output
//     console.log(total);
// }