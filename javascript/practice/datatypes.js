let result;

result="hello friends"
result="1"
 var student={
    name:"sachin",
    age:30,
    email:"john@johnn.com",
    isStudent:false,  
    adress:{
        country:"india",
        city:"pune",
        street:"pune road"
    }
}

result= `his name is ${student.name} and he is ${student.age} years old`;
result= student.isStudent? `${result}`:"is not a student";
result= student.adress;


var numbers=[1,"string",true,null,undefined,{name:"sachin"}];
result= numbers.length;
result= numbers[5].name;
result= numbers;
numbers[1]=" New string";

var students=[
    {name:"Ersin",age:30, scores:[10,20,30]},
    {name:"Sachin",age:32,},
    {name:"John",age:35,},
]

result= students[0].scores[2];
var nestedArray=[1,2,3,[4,5,6,[7,8,9]]];
result= nestedArray[3][3][2];



console.log(result);