// const student={
//     name:"sachin",
//     age:30,
//     education: "Software Engineer",
//     projects:["a","b","c","d"],
//     print: () =>{
//         console.log(this.name);
//         console.log("arrow function");
//     }
// }

// student.print();
// }
// function thisExample(){
//     console.log(this);
// }
// student.print();
// var name= "Joe";
// function LocalScope(){
//     var name = "Dalton"
//     console.log(name);
// }
// console.log(LocalScope);

// const Tools = {
//     bmicalculator: function(weight,height){
//         let bmi=weight/(height*height);
//         console.log(`Bmi resilt is ${bmi}`);
//     },
//     netSalary: function(brutSalary,tax){
//         let netSalary= brutSalary-(brutSalary*tax/100);
//         console.log(`Net Salary is ${netSalary}`);
//     }
// }
// Tools.bmicalculator(69,1.81);;
// Tools.netSalary(1000,10);

// const Computer ={
//     screen:"Asus",
//     keyboard:"Logitech",
//     mouse:"logitech",
//     cpu:"intel",
//     gpu:"nvdia",
//     power: false,
//     turnOn: function(){
//         //this.power=true;
//         Computer.power=true;
//         console.log(`Computer is turned on`);
//         console.log(`
//         Keyboard: ${this.keyboard}
//         Screen: ${this.screen}
//         Mouse: ${this.mouse}
//         CPU: ${this.cpu}
//         GPU: ${this.gpu}`);
//     }
//     ,
//     turnOff: function(){
//         Computer.power=!Computer.power;
//         console.log(`Computer is turned off`);
//     },
//     status: function(){
//         const computerStatus = Computer.power ? "Computer is running" : "Computer is turned off";
//         console.log(computerStatus);
//     }
// }
// Computer.turnOff();
// Computer.turnOn();
// Computer.status();


